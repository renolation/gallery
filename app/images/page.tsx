
import React from 'react';

import ImageGrid from "@/components/image/home/image-grid";
import {getImages} from "@/lib/prisma/prisma-image";


export default async function ImagesPage() {

    const images = await getImages();

    return (
        <>
           <ImageGrid  images={images}/>
        </>
    );
}