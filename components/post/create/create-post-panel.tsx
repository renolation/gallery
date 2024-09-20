"use client";

import {useDispatch, useSelector} from "react-redux";
import { Button } from '@mantine/core';
import {toggleRearrangingButton} from "@/lib/features/post/shared/button-is-rearranging-slice";
import {RootState} from "@/lib/store";

export default function CreatePostPanel() {


    const dispatch = useDispatch();
    const inputPostName = useSelector((state: RootState) => state.inputPostName.value);
    function toggleRearranging() {
        dispatch(toggleRearrangingButton());
    }
    return (
        <div>
            <h1>CreateNewPostRightPanel</h1>
            <p>Upload</p>
            <Button variant="filled"
            onClick={toggleRearranging}
            >Button</Button>
            <p>{inputPostName}</p>
        </div>
    );
}