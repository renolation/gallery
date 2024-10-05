"use server";


import {updatePostDesc} from "@/lib/prisma/prima-post";
import {updateImage} from "@/lib/prisma/prisma-image";

export async function updateImageAction(imageId: string, prompt: string, negativePrompt: string,
                                        guidanceScale: number, steps: number, sampler: string, seed: number) {

    return updateImage(imageId, prompt, negativePrompt, guidanceScale, steps, sampler, seed);
}