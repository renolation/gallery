"use client";

import DropZoneButton from "@/components/post/create/drop-zone";
import {useState} from 'react';
import EditImageCard from "@/components/post/create/edit-image-card";
import {dropImageAction} from "@/action/create-post-action";
import {useDispatch, useSelector} from "react-redux";
import {addImage, ImageLocal} from "@/lib/features/post/edit/edit-post-image-slice";
import {Image as ImageDB} from "@prisma/client";
import {RootState} from "@/lib/store";

export default function NewPostForm() {
    const dispatch = useDispatch();

    const defaultImage: Omit<ImageLocal, 'imageUrl'> = {
        id: '',
        tools: [],
        techniques: [],
        prompt: '',
        nevPrompt: '',
        guidanceScale: undefined,
        steps: undefined,
        sampler: '',
        seed: undefined,
    };


    const editPostImageState = useSelector((state: RootState) => state.editPostImage.images);

    const [images, setImages] = useState<string[]>([]);
    const handleDrop = async (files: File[]) => {
        const newImages: string[] = [];
        console.log(files);
        for (const file of files) {
            const formData = new FormData();
            formData.append('image', file);
            console.log(formData);
            // const imageUrl = await dropImageAction(formData);
            const imageUrl = "https://res.cloudinary.com/dlqx1qpfr/image/upload/v1726741193/gallery/knpxnpctlcbysjva6kff.png";
            if (imageUrl) {
                console.log(imageUrl);
                newImages.push(imageUrl);
                const imageWithUrl: ImageLocal = {
                    ...defaultImage,
                    id: editPostImageState.length.toString(),
                    imageUrl: imageUrl,
                };
                dispatch(addImage(imageWithUrl))
            }
        }
        setImages(prevImages => [...prevImages, ...newImages]);
    };

    const saveChanges = () => {
        console.log('Save changes');
        console.log(editPostImageState);

    }


    return <>
        <DropZoneButton onDrop={handleDrop}/>
        <div>
            {editPostImageState.map((image, index) => (
                <div className="py-4" key={index}>
                    <EditImageCard key={index} imageString={image.imageUrl} imageIndex={index} saveChanges={saveChanges}/>
                </div>
            ))}
        </div>
    </>
}