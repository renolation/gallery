'use server';

import {redirect, useRouter} from "next/navigation";
import {getUserIdFromSession} from "@/lib/auth";
import {createPost, updatePostDesc, updatePostWithImage} from "@/lib/prisma/prima-post";
import {uploadImage} from "@/lib/cloudirary";
import {createImage} from "@/lib/prisma/prisma-image";

export async function createPostAction(formData: FormData) {
    const image = formData.get('image') as File;
    if (!image) return;


    const userId = await getUserIdFromSession();
    if (!userId) {
        return;
    }
    const imageUrl = await uploadImage(image);


    // Create the posts first
    const postId = await createPost(userId);

    // Create the images with the postId
    const imageRecord = await createImage(userId, imageUrl, postId);
    // Update the posts to connect the images
    await updatePostWithImage(postId, imageRecord.id);
    redirect(`/post/${postId}/edit`);
}

export async function updatePostDescAction(postId: string, description: string) {
    await new Promise(resolve => setTimeout(resolve, 2000)); // 2-second delay
    console.log("aaa");
    return updatePostDesc(postId, description);
}