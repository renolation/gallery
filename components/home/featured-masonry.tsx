"use client";
import {Image as ImageDB} from "@prisma/client";


import * as React from "react";
import {Suspense, useEffect} from "react";
import {getFeaturedImagesAction, getImagesAction} from "@/action/image-action";
import {LIMIT_PER_PAGE} from "@/lib/constants";
import Box from "@mui/material/Box";
import Loading from "@/app/images/loading";
import Masonry from "@mui/lab/Masonry";
import {ImageCard} from "@/components/image/shared/image-card";
import {Button} from "@mantine/core";

export default function FeaturedMasonry(){

    const [images, setImages] = React.useState<ImageDB[]>([]);
    const [page, setPage] = React.useState(1);

    useEffect(() => {
        async function fetchImages() {
            const fetchedImages = await getFeaturedImagesAction(1, LIMIT_PER_PAGE);
            setImages(fetchedImages);
        }

        fetchImages().then(r => console.log('Loaded images'));
    }, []);

    const loadMore = () => {
        async function fetchImages() {
            const nextPage = page + 1;
            const fetchedImages = await getFeaturedImagesAction(nextPage, LIMIT_PER_PAGE);
            setImages(prevImages => [...prevImages, ...fetchedImages]);
            setPage(nextPage);
        }

        fetchImages().then(r => console.log('Loaded more images'));
    }


    return (
        <Box>
            <Suspense fallback={<Loading/>}>
                <Masonry columns={{xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6}} spacing={2}>
                    {images.map((item, index) => (
                        <div key={index}>
                            <ImageCard
                                key={item.id}
                                imageId={item.id}
                                imageUrl={item.imageUrl}
                            />
                        </div>
                    ))}
                </Masonry>
            </Suspense>
            {images.length > 0 && <div className="flex justify-center">
                <Button variant="outline" color="gray" onClick={loadMore}>Load more</Button>
            </div>}

        </Box>
    );

}