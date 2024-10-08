"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import {styled} from '@mui/material/styles';
import {Image as ImageDB} from "@prisma/client";
import {ImageCard} from "@/components/image/shared/image-card";
import ImageList from '@mui/material/ImageList';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/lib/store";
import {getImagesAction} from "@/action/image-action";
import {Suspense, useEffect} from "react";
import {Button} from "@mantine/core";
import {setImagePage} from "@/lib/features/image/selecting-tag-image-home";
import { LIMIT_PER_PAGE } from '@/lib/constants';
import Loading from '@/app/images/loading';

type ImagesWithTags = ImageDB & {
    tags: {
        tag: {
            name: string;
            description: string | null;
        };
    }[];
}

export default function ImageMasonry() {
    const dispatch = useDispatch();
    const [images, setImages] = React.useState<ImagesWithTags[]>([]);
    const currentPage = useSelector((state: RootState) => state.selectingTagImageHome.page);
    const selectingTagImage = useSelector((state: RootState) => state.selectingTagImageHome.value);

    useEffect(() => {
        async function fetchImages() {
            const fetchedImages = await getImagesAction(1, LIMIT_PER_PAGE);
            setImages(fetchedImages);
        }

        fetchImages().then(r => console.log('Loaded more images'));
    }, [selectingTagImage]);

    const loadMore = () => {

        async function fetchImages() {
            const nextPage = currentPage + 1;
            const fetchedImages = selectingTagImage ? await getImagesAction(nextPage, LIMIT_PER_PAGE, selectingTagImage) : await getImagesAction(nextPage, LIMIT_PER_PAGE);
            setImages(prevImages => [...prevImages, ...fetchedImages]);
            dispatch(setImagePage(nextPage));
        }
        fetchImages().then(r => console.log('Loaded more images'));
    }


    const filteredImages = selectingTagImage
        ? images.filter(post =>
            post.tags.some(tag => tag.tag.name === selectingTagImage)
        )
        : images;

    return (
        <Box>
            <Suspense fallback={<Loading />}>
                <Masonry columns={{xs: 1, sm: 2, md: 3, lg: 4, xl:5, xxl: 6}} spacing={2}>
                    {filteredImages.map((item, index) => (
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
