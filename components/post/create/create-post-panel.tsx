"use client";

import {useDispatch, useSelector} from "react-redux";
import { Button } from '@mantine/core';
import {toggleRearrangingButton} from "@/lib/features/post/shared/button-is-rearranging-slice";
import {RootState} from "@/lib/store";
import {IconArrowsSort} from "@tabler/icons-react";
import {Image as ImageDB} from "@prisma/client";

export default function CreatePostPanel() {


    const dispatch = useDispatch();
    const inputPostName = useSelector((state: RootState) => state.inputPostName.value);
    const editPostImage = useSelector((state: RootState) => state.editPostImage.images);
    const editorCreate = useSelector((state: RootState) => state.updateEditorPost.value);

    function toggleRearranging() {
        dispatch(toggleRearrangingButton());
    }

    function createPost(title: string, desc: string, images: ImageDB[]){
        console.log(title, desc, images);
    }

    return (
        <div>
            <h1>CreateNewPostRightPanel</h1>
            <p>Upload</p>
            <Button variant="filled"
            onClick={toggleRearranging}
                    leftSection={<IconArrowsSort size={14} />}
            >Rearrange</Button>
            <p>{inputPostName}</p>
        </div>
    );
}