"use client";

import {createSlice} from "@reduxjs/toolkit";

export interface InputPostNameState {
    value: string;
}

// true: saved, false: saving
const initialState: InputPostNameState = {
    value: "",
};

export const InputPostNameSlice = createSlice({
    name: "inputPostName",
    initialState,
    reducers: {
        updateInputPostName: (state, action) => {
            state.value = action.payload
        }
    },
});

// Action creators are generated for each case reducer function
export const {updateInputPostName} = InputPostNameSlice.actions;
export default InputPostNameSlice.reducer;