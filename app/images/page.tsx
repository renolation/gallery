import React from 'react';

import ImageMasonry from "@/components/image/home/images-mansory";
import {getTagsByImages} from "@/lib/prisma/prisma-tag";
import TagListImage from "@/components/image/home/tag-list-image";


export default async function ImagesPage() {


    const tags = await getTagsByImages();

    return (
        <>
            <TagListImage tags={tags.map((tag: { name: string }) => tag.name)}/>
            <div className="py-3"/>
            <ImageMasonry/>
        </>
    );
}