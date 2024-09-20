"use client";

import {createSlice} from "@reduxjs/toolkit";

export interface ButtonEditPostState {
    value: boolean;
}

// true: saved, false: saving
const initialState: ButtonEditPostState = {
    value: true,
};

export const ButtonEditPostSlice = createSlice({
    name: "buttonEditPost",
    initialState,
    reducers: {
        buttonEditPostSaved: (state) => {
            state.value = true;
        },
        buttonEditPostSaving: (state) => {
            state.value = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const {buttonEditPostSaved, buttonEditPostSaving} = ButtonEditPostSlice.actions;
export default ButtonEditPostSlice.reducer;
