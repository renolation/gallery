/* eslint-disable react/prop-types */

"use client";
import Masonry from 'react-masonry-css'
import React from 'react';

import {ImageCard} from "@/components/image/shared/image-card";


const images = [
    {src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219876/cld-sample-3.jpg', label: 'Sample image 1'},
    {src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219874/samples/look-up.jpg', label: 'Sample image 2'},
    {
        src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219875/samples/outdoor-woman.jpg',
        label: 'Sample image 3'
    },
    {src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219876/cld-sample-2.jpg', label: 'Sample image 4'},
    {
        src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219873/samples/breakfast.jpg',
        label: 'Sample image 5'
    },
    {
        src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219875/samples/outdoor-woman.jpg',
        label: 'Sample image 6'
    },
    {src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219876/cld-sample-3.jpg', label: 'Sample image 7'},
    {src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219876/cld-sample-2.jpg', label: 'Sample image 8'},
    {src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219876/cld-sample-5.jpg', label: 'Sample image 9'},
    {src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219876/cld-sample.jpg', label: 'Sample image 10'},
    {src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219876/cld-sample-2.jpg', label: 'Sample image 11'},
    {src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219876/cld-sample-4.jpg', label: 'Sample image 12'},
    {src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219876/cld-sample-5.jpg', label: 'Sample image 13'},
    {src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219876/cld-sample-4.jpg', label: 'Sample image 14'},
    {src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219876/cld-sample.jpg', label: 'Sample image 15'},
    {src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219876/cld-sample-3.jpg', label: 'Sample image 16'},
];

const getRandomImageId = () => {
    const ids = ['d23e1531-8a3c-4ffa-9634-e96b3f4addab', '323e6489-0e4f-41ee-9420-6f197326dc9f'];
    return ids[Math.floor(Math.random() * ids.length)];
};

const RealWorld = () => (
    
    <div className="p-6">
        <Masonry
            breakpointCols={{default: 4, 1400: 3, 900: 2, 600: 1}}
            elementResponsive={true}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {images.map(obj => (
                <ImageCard key={obj.label} imageUrl={obj.src}
                    imageId="9ede2121-dd82-4f59-8011-d4be6874b829"
                />
            ))}
        </Masonry>
    </div>
);

export default RealWorld;