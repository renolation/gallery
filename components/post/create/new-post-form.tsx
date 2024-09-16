"use client";

import DropZoneButton from "@/components/post/create/drop-zone-button";
import {useState} from 'react';
import EditImageCard from "@/components/post/create/edit-image-card";

export default function NewPostForm() {

    const [images, setImages] = useState<string[]>([]);
    const handleDrop = (files: File[]) => {
        const newImages: string[] = [];
        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = (e) => {
                newImages.push(e.target?.result as string);
                if (newImages.length === files.length) {
                    setImages(prevImages => [...prevImages, ...newImages]);
                }
            };
            reader.readAsDataURL(file);
        });
    };


    return <>
        <DropZoneButton onDrop={handleDrop}/>
        <div>
            {images.map((image, index) => (
                // <img key={index} width={400} src={image} alt={`Dropped file ${index + 1}`}/>
                <EditImageCard key={index} imageString={image} imageIndex={index} />
            ))}
        </div>
    </>
}