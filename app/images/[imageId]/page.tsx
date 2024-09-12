
import React from 'react';

import {getImageById} from "@/lib/prisma/prisma-image";
import {notFound} from "next/navigation";
import ImageDetail from "@/components/image/detail/image-detail";

export default async function ImageDetailPage({params}: { params: { imageId: string } }) {
        const image = await getImageById(params.imageId);
        if (!image) {
         notFound()
    }
        return <ImageDetail image={image} />

}