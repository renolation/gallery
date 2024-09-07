'use server';

import {redirect, useRouter} from "next/navigation";
import {getUserIdFromSession} from "@/lib/auth";
import {createPost, updatePostWithImage} from "@/lib/prisma/prima-post";
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


    // Create the post first
    const postId = await createPost(userId);

    // Create the image with the postId
    const imageRecord = await createImage(userId, imageUrl, postId);

    // Update the post to connect the image
    await updatePostWithImage(postId, imageRecord.id);


    redirect(`/post/${postId}/edit`);

}