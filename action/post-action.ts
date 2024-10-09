'use server';

import {getUserIdFromSession} from "@/lib/auth";
import {
    createPost,
    getPostById, getPosts,
    updatePostDesc,
    updatePostDetail,
    updatePostWithImage,
    updatePostWithImages
} from "@/lib/prisma/prima-post";
import {uploadImage} from "@/lib/cloudirary";
import {createImage, createImageWithoutPostId, updateOrder} from "@/lib/prisma/prisma-image";
import {addTagsToPost, addTagToImage, createOrUpdateTagForPost, createTag} from "@/lib/prisma/prisma-tag";
import {redirect} from "next/navigation";

export async function editPostAction(postId: number, imageId: number) {
    const userId = await getUserIdFromSession();
    if (!userId) {
        return;
    }

    const post = await getPostById(postId);
    if(!post) {
        console.log("Post not found");
        return;
    }
    await updatePostWithImage(post.id, imageId);

    // redirect(`/posts/${post.id}`);

}

export async function updatePostAction(postId: number,  title: string, description: string) {
    const userId = await getUserIdFromSession();
    if (!userId) {
        return;
    }

    const post = await getPostById(postId);
    if(!post) {
        console.log("Post not found");
        return;
    }

    await updatePostDetail(postId, title, description);

    redirect(`/posts/${postId}`);

}

export async function createPostAction(imagesId: number[], title: string, description: string, tagsPost: string[]) {
    const userId = await getUserIdFromSession();
    if (!userId) {
        return;
    }

    const postId = await createPost(userId, title, description);
    await addTagsToPostAction(postId, tagsPost);
    await updatePostWithImages(postId, imagesId);

    redirect(`/posts/${postId}`);

}

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

export async function updatePostDescAction(postId: number, description: string) {
    await new Promise(resolve => setTimeout(resolve, 2000)); // 2-second delay
    console.log("aaa");
    return updatePostDesc(postId, description);
}

export async function addTagsToPostAction(postId: number, tags: string[]){
    console.log("add tag to post");
    await addTagsToPost(postId, tags);
}

export async function createTagAction(tag: string){
    console.log("create tag");
    await createTag(tag);
}

export async function imageTagAction(imageId: number, tag: string){
    console.log("image tag");
    await addTagToImage(imageId, tag);
}

export async function updateOrderAction(imageIds: number[]){
    console.log("update order");
    await updateOrder(imageIds);
}

export async function getPostsAction(page: number, limit: number, tag?: string) {
    return getPosts(page, limit, tag);
}