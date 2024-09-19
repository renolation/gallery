"use client";

import {createSlice} from "@reduxjs/toolkit";

export interface ButtonIsRearrangingState {
    value: boolean;
}

// true: saved, false: saving
const initialState: ButtonIsRearrangingState = {
    value: false,
};

export const ButtonIsRearrangingSlice = createSlice({
    name: "buttonIsRearranging",
    initialState,
    reducers: {

        toggleRearrangingButton: (state) => {
            state.value = !state.value;
        }
    },
});

// Action creators are generated for each case reducer function
export const {toggleRearrangingButton} = ButtonIsRearrangingSlice.actions;
export default ButtonIsRearrangingSlice.reducer;