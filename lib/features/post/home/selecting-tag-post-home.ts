"use client";

import {createSlice} from "@reduxjs/toolkit";

export interface SelectingTagPostHomeState {
    value: string;
        page: number;
}

const initialState: SelectingTagPostHomeState = {
    value: '',
    page: 0,
}

export const SelectingTagPostHomeSlice = createSlice({
    name: "selectingTagPostHome",
    initialState,
    reducers: {
        setSelectingTagPostHome: (state, action) => {
            state.value = action.payload;
        },
        removeSelectingTagPostHome: (state) => {
            state.value = '';
        },
        setPostPage: (state, action) => {
            state.page = action.payload;
        }

    },
});

export const {setSelectingTagPostHome, removeSelectingTagPostHome, setPostPage} = SelectingTagPostHomeSlice.actions;
export default SelectingTagPostHomeSlice.reducer;