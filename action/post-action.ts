'use server';

import {redirect, useRouter} from "next/navigation";
import {getUserIdFromSession} from "@/lib/auth";
import {createPost} from "@/lib/prisma/prima-post";

export async function createPostAction(formData: FormData) {
    const image = formData.get('image') as File;
    if (!image) return;


    const userId = await getUserIdFromSession();
    if (!userId) {
        return;
    }

    const postId = await createPost(userId);

    redirect(`/post/${postId}/edit`);

}