"use client";

import {createSlice} from "@reduxjs/toolkit";

export interface SelectingTagPostHomeState {
    value: string;
}

const initialState: SelectingTagPostHomeState = {
    value: '',
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
        }

    },
});

export const {setSelectingTagPostHome, removeSelectingTagPostHome} = SelectingTagPostHomeSlice.actions;
export default SelectingTagPostHomeSlice.reducer;