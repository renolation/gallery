"use server";


import {getUserIdFromSession} from "@/lib/auth";
import {
    createPost,
    getPostById,
    updatePostDetail,
    updatePostWithImage,
    updatePostWithImages
} from "@/lib/prisma/prima-post";
import {redirect} from "next/navigation";



export async function editPostAction(postId: string, imageId: string) {
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

export async function updatePostAction(postId: string,  title: string, description: string) {
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