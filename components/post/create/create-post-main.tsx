"use client";

import {RootState} from "@/lib/store";
import {useDispatch, useSelector} from "react-redux";
import NewPostForm from "@/components/post/create/new-post-form";
import RearrangingImage from "@/components/post/create/rearranging-image";
import {Image as ImageDB} from "@prisma/client";
export default function CreatePostMain({images}: { images: ImageDB[] }) {

    const buttonIsRearrangingState = useSelector((state: RootState) => state.buttonIsRearranging.value);

    console.log(images);
    return (
        buttonIsRearrangingState ? <RearrangingImage/> : <NewPostForm images={images}/>
    );
}
