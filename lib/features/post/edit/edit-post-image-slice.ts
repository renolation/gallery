import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Image as ImageDB} from "@prisma/client";

export interface ImageLocal {
    id: string;
    prompt: string;
    nevPrompt: string;
    guidanceScale?: number;
    steps?: number;
    sampler: string;
    seed?: number;
    imageUrl: string;
    tools: string[];
    techniques: string[];
}


interface EditPostImageState {
    images: ImageDB[];
}

const initialState: EditPostImageState = {
    images: [],
};

export const EditPostImageSlice = createSlice({
    name: 'editPostImage',
    initialState,
    reducers: {
        addImage: (state, action: PayloadAction<ImageDB>) => {
            state.images.push(action.payload);
        },

        removeImage: (state, action: PayloadAction<number>) => {
            state.images.splice(action.payload, 1);
        },

        clearImage(state) {
          state.images = [];
        },

        updateImage: (state, action: PayloadAction<{ index: number; formData: Partial<ImageLocal> }>) => {
            const {index, formData} = action.payload;
            state.images[index] = {...state.images[index], ...formData};
        },

        updateTool: (state, action: PayloadAction<{ index: number; tools: string[] }>) => {
            const {index, tools} = action.payload;
            console.log(index, tools);
            state.images[index].tools = tools;
        },
        updateTechnique: (state, action: PayloadAction<{ index: number; techniques: string[] }>) => {
            const {index, techniques} = action.payload;
            console.log(index, techniques);
            state.images[index].techniques = techniques;
        }
    },
});

export const {
    addImage,
    updateImage,
    clearImage,
    removeImage,
    updateTechnique,
    updateTool
} = EditPostImageSlice.actions;
export default EditPostImageSlice.reducer;