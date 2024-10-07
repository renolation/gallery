"use server";


import {updateImage} from "@/lib/prisma/prisma-image";

export async function updateImageAction(imageId: string, prompt: string, negativePrompt: string,
                                        guidanceScale: number, steps: number, sampler: string, seed: number) {

    return updateImage(imageId, prompt, negativePrompt, guidanceScale, steps, sampler, seed);
}