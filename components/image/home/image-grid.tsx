"use client";
import Masonry from 'react-masonry-css'
import React from 'react';
import {Image as ImageDB, Post} from '@prisma/client';
import {ImageCard} from '../shared/image-card';


export default function ImageGrid({images}: { images: ImageDB[] }) {
    return (
        <div className="p-6">
            <Masonry
                breakpointCols={{default: 4, 1400: 3, 900: 2, 600: 1}}
                elementResponsive={true}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {images.map(image => (
                    <ImageCard
                        key={image.id}
                        imageId={image.id}
                        imageUrl={image.imageUrl}
                    />
                ))}
            </Masonry>
        </div>
    );
}

