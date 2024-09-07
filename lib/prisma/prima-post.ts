import prisma from "@/lib/prisma/prisma";


export async function createPost(userId: string) {
    const newPost = await prisma.post.create({
        data: {
            userId: userId,
        },
    });
    return newPost.id;
}