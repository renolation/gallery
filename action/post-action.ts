'use server';

import {getUserIdFromSession} from "@/lib/auth";
import {createPost, updatePostDesc, updatePostWithImage} from "@/lib/prisma/prima-post";
import {uploadImage} from "@/lib/cloudirary";
import {createImage} from "@/lib/prisma/prisma-image";
import {addTagsToPost, createOrUpdateTagForPost, createTag} from "@/lib/prisma/prisma-tag";

export async function createPostActionOld(formData: FormData) {
    const image = formData.get('image') as File;
    if (!image) return;


    const userId = await getUserIdFromSession();
    if (!userId) {
        return;
    }
    const imageUrl = await uploadImage(image);


    // Create the posts first
    // const postId = await createPost(userId);

    // Create the images with the postId
    // const imageRecord = await createImage(userId, imageUrl, postId);
    // Update the posts to connect the images
    // await updatePostWithImage(postId, imageRecord.id);
    // redirect(`/post/${postId}/edit`);
}

export async function updatePostDescAction(postId: string, description: string) {
    await new Promise(resolve => setTimeout(resolve, 2000)); // 2-second delay
    console.log("aaa");
    return updatePostDesc(postId, description);
}

export async function addTagsToPostAction(postId: string, tags: string[]){
    console.log("add tag to post");
    await addTagsToPost(postId, tags);
}

export async function createTagAction(tag: string){
    console.log("create tag");
    await createTag(tag);
}