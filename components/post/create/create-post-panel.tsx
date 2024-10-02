"use client";

import {useDispatch, useSelector} from "react-redux";
import {Button} from '@mantine/core';
import {toggleRearrangingButton} from "@/lib/features/post/shared/button-is-rearranging-slice";
import {RootState} from "@/lib/store";
import {IconArrowsSort} from "@tabler/icons-react";
import {Image as ImageDB} from "@prisma/client";
import {createPostAction} from "@/action/create-post-action";
import {updatePostAction} from "@/action/edit-post-action";
import {usePathname} from "next/navigation";
import {addTagsToPostAction} from "@/action/post-action";

export default function CreatePostPanel() {


    const dispatch = useDispatch();
    const inputPostName = useSelector((state: RootState) => state.inputPostName.value);
    const editPostImage = useSelector((state: RootState) => state.editPostImage.images);
    const editorCreate = useSelector((state: RootState) => state.updateEditorPost.value);
        const tagsPost = useSelector((state: RootState) => state.tagPost.value);

    const pathname = usePathname();

    const postEditRouteMatch = pathname.match(/^\/posts\/([0-9a-fA-F-]{36})\/edit$/);
    const isPostEditRoute = /^\/posts\/[0-9a-fA-F-]{36}\/edit$/.test(pathname);



    function toggleRearranging() {
        dispatch(toggleRearrangingButton());
    }

    const createPost = async () => {
        console.log(inputPostName);
        console.log(editorCreate);
        console.log(editPostImage);
        const imageIds = editPostImage.map((image: ImageDB) => image.id);
        await createPostAction(imageIds, inputPostName, editorCreate, tagsPost);
    }

    const updatePost = async () => {

        if(postEditRouteMatch && isPostEditRoute) {
            await addTagsToPostAction(postEditRouteMatch[1], tagsPost);
        await updatePostAction(postEditRouteMatch[1], inputPostName, editorCreate);
        }

    }


    return (
        <div>
            <h1>Create Post Panel</h1>
            <br/>
            <Button variant="filled"
                    onClick={toggleRearranging}
                    leftSection={<IconArrowsSort size={14}/>}
            >Rearrange</Button>
            <br/>
            <br/>
            {isPostEditRoute ? <Button variant="filled"
                                       onClick={updatePost}
            >
                Update
            </Button> : <Button variant="filled"
                                onClick={createPost}
            >
                Upload
            </Button>}
        </div>
    );
}