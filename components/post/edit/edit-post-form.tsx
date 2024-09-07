"use client";
import {useDropzone} from "react-dropzone";
import classes from './edit-post-form.module.css'

import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export default function EditPostForm() {

    const [image, setImage] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);


    const onDrop = (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        setImage(file);
        const reader = new FileReader();
        reader.onload = () => {
            setImageUrl(reader.result as string);
        };
        reader.readAsDataURL(file);

    };

    useEffect(() => {
        return () => {
            if (imageUrl) {
                URL.revokeObjectURL(imageUrl);
            }
        };
    }, [imageUrl]);

    const {getRootProps, getInputProps} = useDropzone({onDrop});


    return (
        <div className={classes.main}>
            <div {...getRootProps({className: classes.dropzone})}>
                <input {...getInputProps()} />
                <p>Drag drop an image here, or click to select one</p>
            </div>
            {image && <p>Selected image: {image.name}</p>}
            {imageUrl && <img src={imageUrl} className={classes.image} alt="Selected"/> }

        </div>
    );

}