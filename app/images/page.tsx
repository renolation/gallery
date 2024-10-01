
import React from 'react';

import ImageGrid from "@/components/image/home/image-grid";
import {getImages} from "@/lib/prisma/prisma-image";
import ImageMasonry from "@/components/image/home/images-mansory";


export default async function ImagesPage() {

    const images = await getImages();

    return (
        <>
           <ImageMasonry images={images}/>
        </>
    );
}