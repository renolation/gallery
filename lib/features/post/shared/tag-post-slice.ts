"use client";

import {createSlice} from "@reduxjs/toolkit";

export interface TagPostState {
    value: string[];
}

// true: saved, false: saving
const initialState: TagPostState = {
    value: [],
};

export const TagPostSlice = createSlice({
    name: "tagPost",
    initialState,
    reducers: {
        addAllTags: (state, action) => {
            state.value = action.payload;
        },
        addTag: (state, action) => {
            state.value.push(action.payload);
        },
        removeTag: (state, action) => {
            state.value = state.value.filter(tag => tag !== action.payload);
        },
        resetTag: (state) => {
            state.value = [];
        }

    },
});

// Action creators are generated for each case reducer function
export const {addAllTags, addTag, removeTag, resetTag} = TagPostSlice.actions;
export default TagPostSlice.reducer;
