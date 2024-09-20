"use client";
import classes from "./create-post-form.module.css";
import React from 'react';
import {useDropzone} from "react-dropzone";

import {createPostActionOld} from "@/action/post-action";
import {dropImageAction} from "@/action/create-post-action";

export function CreatePostForm() {

    const onDrop = (acceptedFiles: File[]) => {
        handleSubmit(acceptedFiles[0]);
    };

    const handleSubmit = async (image: File) => {
        if (image) {
            const formData = new FormData();
            formData.append('image', image);
            // await createPostAction(formData);
        }
    };
    const {
        getRootProps,
        getInputProps,
        fileRejections,
    } = useDropzone({
        onDrop,
        accept: {
            "image/jpeg": [".jpeg", ".jpg"],
            "image/png": [".png"],
            "image/webp": [".webp"],
        },
        maxSize: 1048576,
    });

    const fileRejectionItems = fileRejections.map(({file, errors}) => {
        return (
            <li key={file.name}>
                {file.name} - {file.size} bytes
                <ul>
                    {errors.map(e => <li key={e.code}>{e.message}</li>)}
                </ul>

            </li>
        )
    });

    return (
        <div className={classes.main}>
            <div {...getRootProps({className: classes.dropzone})}>
                <input {...getInputProps()} />
                <p>Drag n drop an image here, or click to select one</p>
            </div>
            {fileRejectionItems}
        </div>
    );

}