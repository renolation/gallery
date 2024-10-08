"use client";

import {createSlice} from "@reduxjs/toolkit";

export interface SelectingTagImageHomeState {
    value: string;
    page: number;
}

const initialState: SelectingTagImageHomeState = {
    value: '',
    page: 0,
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
        },
        setImagePage: (state, action) => {
            state.page = action.payload;
        }

    },
});

export const {setSelectingTagImageHome, removeSelectingTagImageHome, setImagePage} = SelectingTagImageHomeSlice.actions;
export default SelectingTagImageHomeSlice.reducer;