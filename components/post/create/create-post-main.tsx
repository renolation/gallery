"use client";

import {RootState} from "@/lib/store";
import {useDispatch, useSelector} from "react-redux";
import NewPostForm from "@/components/post/create/new-post-form";
import RearrangingImage from "@/components/post/create/rearranging-image";
import {Image as ImageDB} from "@prisma/client";
import {ImageWithTags} from "@/lib/features/post/edit/edit-post-image-slice";


interface CreatePostMainProps {
    images: ImageWithTags[];
}
export default function CreatePostMain({images}: CreatePostMainProps) {

    const buttonIsRearrangingState = useSelector((state: RootState) => state.buttonIsRearranging.value);

    return (
        buttonIsRearrangingState ? <RearrangingImage/> : <NewPostForm images={images}/>
    );
}
