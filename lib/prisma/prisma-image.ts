import prisma from "@/lib/prisma/prisma";


export async function createImage(userId: string, imageUrl: string, postId: string) {
    return prisma.image.create({
        data: {
            userId: userId,
            imageUrl: imageUrl,
            postId: postId
        },
    });
}

export async function getImageById(imageId: string) {
    return prisma.image.findUnique({
        where: {
            id: imageId,
        },
    });
}