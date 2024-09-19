"use client";

import {RootState} from "@/lib/store";
import {useSelector} from "react-redux";
import NewPostForm from "@/components/post/create/new-post-form";
import RearrangingImage from "@/components/post/create/rearranging-image";

export default function CreatePostMain() {

    const buttonIsRearrangingState = useSelector((state: RootState) => state.buttonIsRearranging.value);

    return (
        buttonIsRearrangingState ? <RearrangingImage/> : <NewPostForm/>
    );
}
