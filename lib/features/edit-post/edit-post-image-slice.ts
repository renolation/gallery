import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface ImageLocal {
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
    images: ImageLocal[];
}

const initialState: EditPostImageState = {
    images: [],
};

export const EditPostImageSlice = createSlice({
    name: 'editPostImage',
    initialState,
    reducers: {
        addImage: (state, action: PayloadAction<ImageLocal>) => {
            state.images.push(action.payload);
        },
        updateImage: (state, action: PayloadAction<{ index: number; image: Partial<ImageLocal> }>) => {
            const {index, image} = action.payload;
            state.images[index] = {...state.images[index], ...image};
        },
        removeImage: (state, action: PayloadAction<number>) => {
            state.images.splice(action.payload, 1);
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
    removeImage,
    updateTechnique,
    updateTool
} = EditPostImageSlice.actions;
export default EditPostImageSlice.reducer;