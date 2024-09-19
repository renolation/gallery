"use client";

import {useDispatch} from "react-redux";
import { Button } from '@mantine/core';
import {toggleRearrangingButton} from "@/lib/features/edit-post/button-is-rearranging-slice";

export default function CreateNewPostRightPanel() {


    const dispatch = useDispatch();
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
        </div>
    );
}