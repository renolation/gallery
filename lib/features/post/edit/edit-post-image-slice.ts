import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Image as ImageDB, ImagesOnTags, Post, Tag, User} from "@prisma/client";


export interface PostWithRelations extends Post {
    images: (ImageDB & {
        tags: {
            name: string;
            description: string | null;
        }[];
    })[];
    user: User;
    tags: {
        name: string;
        description: string | null;
    }[];
}

export interface ImageWithTags extends ImageDB {
    tags: {
        name: string;
        description: string | null;
    }[];
}

interface EditPostImageState {
    images: ImageWithTags[];
}

const initialState: EditPostImageState = {
    images: [],
};

export const EditPostImageSlice = createSlice({
    name: 'editPostImage',
    initialState,
    reducers: {
        addImage: (state, action: PayloadAction<ImageWithTags>) => {
            state.images.push(action.payload); // keeps the original tags
        },


        removeImage: (state, action: PayloadAction<number>) => {
            state.images.splice(action.payload, 1);
        },

        clearImage(state) {
            state.images = [];
        },

        updateImage: (state, action: PayloadAction<{ index: number; formData: Partial<ImageWithTags> }>) => {
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
        },
        addImageTag: (state, action: PayloadAction<{ index: number; tagName: string }>) => {
            const {index, tagName} = action.payload;
            if (state.images[index]) {
                state.images[index].tags.push({
                    name: tagName,
                    description: null,
                });
            }
        },
        removeImageTag: (state, action: PayloadAction<{ index: number; tagName: string }>) => {
            const {index, tagName} = action.payload;
            if (state.images[index]) {
                state.images[index].tags = state.images[index].tags.filter(tag => tag.name !== tagName);
            }
        },
    },
});

export const {
    addImage,
    updateImage,
    clearImage,
    removeImage,
    updateTechnique,
    updateTool,
    addImageTag,
    removeImageTag,
} = EditPostImageSlice.actions;
export default EditPostImageSlice.reducer;