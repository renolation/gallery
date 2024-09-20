'use server';

import {getUserIdFromSession} from "@/lib/auth";
import {uploadImage} from "@/lib/cloudirary";
import {createImageWithoutPostId} from "@/lib/prisma/prisma-image";

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

//todo: add save order images in post action