"use client";

import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

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
        buttonSaved: (state) => {
            state.value = true;
        },
        buttonSaving: (state) => {
            state.value = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const {buttonSaved, buttonSaving} = ButtonEditPostSlice.actions;
export default ButtonEditPostSlice.reducer;
