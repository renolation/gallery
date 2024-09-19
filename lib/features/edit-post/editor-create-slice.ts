"use client";

import {createSlice} from "@reduxjs/toolkit";

export interface EditorCreateSliceState {
    value: string;
}

const initialState: EditorCreateSliceState = {
    value: "",
};

export const EditorCreateSlice = createSlice({
    name: "editorCreate",
    initialState,
    reducers: {
        updateEditor: (state, action) => {
            console.log(action.payload);
            state.value = action.payload;
        },
    },
});

export const {updateEditor} = EditorCreateSlice.actions;
export default EditorCreateSlice.reducer;