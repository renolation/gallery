"use client";

import {createSlice} from "@reduxjs/toolkit";

export interface ToggleRightPanelState {
    value: boolean;
}

// true: saved, false: saving
const initialState: ToggleRightPanelState = {
    value: true,
};

export const ToggleRightPanelSlice = createSlice({
    name: "buttonEditPost",
    initialState,
    reducers: {
        toggleRightPanel: (state) => {
            state.value = !state.value;
        },

    },
});

// Action creators are generated for each case reducer function
export const {toggleRightPanel} = ToggleRightPanelSlice.actions;
export default ToggleRightPanelSlice.reducer;
