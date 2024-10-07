"use client";

import {createSlice} from "@reduxjs/toolkit";

export interface SelectingTagImageHomeState {
    value: string;
}

const initialState: SelectingTagImageHomeState = {
    value: '',
}

export const SelectingTagImageHomeSlice = createSlice({
    name: "selectingTagImageHome",
    initialState,
    reducers: {
        setSelectingTagImageHome: (state, action) => {
            state.value = action.payload;
        },
        removeSelectingTagImageHome: (state) => {
            state.value = '';
        }

    },
});

export const {setSelectingTagImageHome, removeSelectingTagImageHome} = SelectingTagImageHomeSlice.actions;
export default SelectingTagImageHomeSlice.reducer;