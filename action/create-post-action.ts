'use server';

import {getUserIdFromSession} from "@/lib/auth";
import {uploadImage} from "@/lib/cloudirary";
import {createPost, getPostById, updatePostWithImages} from "@/lib/prisma/prima-post";
import {createImageWithoutPostId} from "@/lib/prisma/prisma-image";
import {redirect} from "next/navigation";
import {addTagsToPostAction} from "@/action/post-action";

export async function dropImageAction(formData: FormData) {
    console.log("dropImageAction called");
    const image = formData.get('image') as File;
    if (!image) {
        console.log("No image found in formData");
        return;
    }

    const userId = await getUserIdFromSession();
    if (!userId) {
        return;
    }
    console.log(userId);
    const imageUrl = await uploadImage(image);
    console.log(imageUrl);
    return await createImageWithoutPostId(userId, imageUrl);
}


export async function createPostAction(imagesId: string[], title: string, description: string, tagsPost: string[]) {
    const userId = await getUserIdFromSession();
    if (!userId) {
        return;
    }

    const postId = await createPost(userId, title, description);
    await addTagsToPostAction(postId, tagsPost);
    await updatePostWithImages(postId, imagesId);

    redirect(`/posts/${postId}`);

}




//todo: add save order images in post action