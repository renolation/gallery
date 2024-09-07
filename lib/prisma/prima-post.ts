import prisma from "@/lib/prisma/prisma";


export async function createPost(userId: string) {
    const newPost = await prisma.post.create({
        data: {
            userId: userId,
        },
    });
    return newPost.id;
}


export async function updatePostWithImage(postId: string, imageId: string) {
    await prisma.post.update({
        where: { id: postId },
        data: {
            images: {
                connect: { id: imageId }
            }
        },
    });
}
export async function getPostById(postId: string) {
    return prisma.post.findUnique({
        where: { id: postId },
        include: {
            images: true,
        },
    });
}