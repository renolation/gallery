"use client";

import {createSlice} from "@reduxjs/toolkit";

export interface EditorPostState {
    value: string;
}

const initialState: EditorPostState = {
    value: "",
};

export const EditorPostSlice = createSlice({
    name: "editorPost",
    initialState,
    reducers: {
        updateEditorPost: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const {updateEditorPost} = EditorPostSlice.actions;
export default EditorPostSlice.reducer;