"use server";


import {getImages, updateImage} from "@/lib/prisma/prisma-image";

export async function updateImageAction(imageId: string, prompt: string, negativePrompt: string,
                                        guidanceScale: number, steps: number, sampler: string, seed: number) {

    return updateImage(imageId, prompt, negativePrompt, guidanceScale, steps, sampler, seed);
}

export async function getImagesAction(page: number, limit: number, tag?: string) {
    // await new Promise(resolve => setTimeout(resolve, 2000)); // 2-second delay
    return getImages(page, limit, tag);
}