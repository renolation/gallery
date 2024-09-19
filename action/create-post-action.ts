'use server';

import {getUserIdFromSession} from "@/lib/auth";
import {uploadImage} from "@/lib/cloudirary";

export async function dropImageAction(formData: FormData) {
    const image = formData.get('image') as File;
    if (!image) return;

    const userId = await getUserIdFromSession();
    if (!userId) {
        return;
    }

    return await uploadImage(image);
}

//todo: add save order images in post action