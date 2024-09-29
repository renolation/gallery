"use client";
import Masonry from 'react-masonry-css'
import React from 'react';
import {PostCard} from "@/components/post/home/post-card";
import {Image as ImageDB, Post} from '@prisma/client';


// const images = [
//     {src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219876/cld-sample-3.jpg', label: 'Sample image 1'},
//     {src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219874/samples/look-up.jpg', label: 'Sample image 2'},
//     {
//         src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219875/samples/outdoor-woman.jpg',
//         label: 'Sample image 3'
//     },
//     {src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219876/cld-sample-2.jpg', label: 'Sample image 4'},
//     {
//         src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219873/samples/breakfast.jpg',
//         label: 'Sample image 5'
//     },
//     {
//         src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219875/samples/outdoor-woman.jpg',
//         label: 'Sample image 6'
//     },
//     {src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219876/cld-sample-3.jpg', label: 'Sample image 7'},
//     {src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219876/cld-sample-2.jpg', label: 'Sample image 8'},
//     {src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219876/cld-sample-5.jpg', label: 'Sample image 9'},
//     {src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219876/cld-sample.jpg', label: 'Sample image 10'},
//     {src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219876/cld-sample-2.jpg', label: 'Sample image 11'},
//     {src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219876/cld-sample-4.jpg', label: 'Sample image 12'},
//     {src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219876/cld-sample-5.jpg', label: 'Sample image 13'},
//     {src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219876/cld-sample-4.jpg', label: 'Sample image 14'},
//     {src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219876/cld-sample.jpg', label: 'Sample image 15'},
//     {src: 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219876/cld-sample-3.jpg', label: 'Sample image 16'},
// ];


type PostWithImages = Post & {
    images: ImageDB[];
};

export default function PostGrid({posts}: { posts: PostWithImages[] }) {
    return (
        <div className="p-6">
            <Masonry
                breakpointCols={{default: 4, 1400: 3, 900: 2, 600: 1}}
                elementResponsive={true}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {posts.map(post => (
                    // <img src={obj.src} key={obj.label} alt="Image" className="w-full"/>
                    <PostCard
                        key={post.id}
                        imageUrl={post.images.length > 0 ? post.images[0].imageUrl : 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219876/cld-sample-3.jpg'}
                    />
                ))}
            </Masonry>
        </div>
    );
}

