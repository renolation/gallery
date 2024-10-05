"use client";

import {RootState} from "@/lib/store";
import {useDispatch, useSelector} from "react-redux";
import NewPostForm from "@/components/post/create/new-post-form";
import RearrangingImage from "@/components/post/create/rearranging-image";
import {Image as ImageDB} from "@prisma/client";
import {addImage, clearImage, ImageWithTags} from "@/lib/features/post/edit/edit-post-image-slice";
import {useEffect} from "react";


interface CreatePostMainProps {
    images: ImageWithTags[];
}
export default function CreatePostMain({images}: CreatePostMainProps) {
    const dispatch = useDispatch();

    const buttonIsRearrangingState = useSelector((state: RootState) => state.buttonIsRearranging.value);

        useEffect(() => {
        if (images.length > 0) {
            console.log('Clearing images');
            dispatch(clearImage());
            for (const image of images) {
                const imageWithTags: ImageWithTags = {
                    ...image,
                    tags: image.tags,
                };
                // console.log('Adding image:', imageWithTags);
                dispatch(addImage(imageWithTags));

            }
        }
    }, [images, dispatch]);

    return (
        buttonIsRearrangingState ? <RearrangingImage/> : <NewPostForm images={images}/>
    );
}
