import React from 'react';

import ImageGrid from "@/components/image/home/image-grid";
import {getImages} from "@/lib/prisma/prisma-image";
import ImageMasonry from "@/components/image/home/images-mansory";
import {getTagsByImages} from "@/lib/prisma/prisma-tag";
import TagListPost from "@/components/post/home/tag-list-post";
import TagListImage from "@/components/image/home/tag-list-image";


export default async function ImagesPage() {

    const images = await getImages();
    const tags = await getTagsByImages();

    return (
        <>
            <TagListImage tags={tags.map(tag => tag.name)}/>
            <div className="py-3"/>
            <ImageMasonry images={images}/>
        </>
    );
}