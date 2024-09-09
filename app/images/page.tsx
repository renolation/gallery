/* eslint-disable react/prop-types */

"use client";
import React from 'react';
import StackGrid, {transitions, easings} from 'react-stack-grid';

const transition = transitions.scaleDown;

const images = [
    {src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219876/cld-sample-3.jpg', label: 'Sample image 1'},
    {src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219874/samples/look-up.jpg', label: 'Sample image 2'},
    {src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219875/samples/outdoor-woman.jpg', label: 'Sample image 3'},
    {src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219876/cld-sample-2.jpg', label: 'Sample image 4'},
    {src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219873/samples/breakfast.jpg', label: 'Sample image 5'},
    {src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219876/cld-sample-4.jpg', label: 'Sample image 6'},
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


const RealWorld = () => (
    <StackGrid
        monitorImagesLoaded
        columnWidth={300}
        duration={600}
        gutterWidth={15}
        gutterHeight={15}
        easing={easings.cubicOut}
        appearDelay={60}
        appear={transition.appear}
        appeared={transition.appeared}
        enter={transition.enter}
        entered={transition.entered}
        leaved={transition.leaved}
    >
        {images.map(obj => (
            <figure
                key={obj.label}
                className="image"
            >
                <img src={obj.src} alt={obj.label}/>
                <figcaption>{obj.label}</figcaption>
            </figure>
        ))}
    </StackGrid>
);

export default RealWorld;