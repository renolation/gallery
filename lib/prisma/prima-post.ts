import prisma from "@/lib/prisma/prisma";

export async function getPosts() {
    return prisma.post.findMany({
        include: {
            images: true,
            user: true,
        },
    });
}


export async function createPost(userId: string, title: string, description: string) {
    const newPost = await prisma.post.create({
        data: {
            userId: userId,
            title: title,
            description: description,
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

export async function updatePostWithImages(postId: string, imageIds: string[]) {
    await prisma.post.update({
        where: { id: postId },
        data: {
            images: {
                connect: imageIds.map(id => ({ id }))
            }
        },
    });
}

export async function updatePostDetail(postId: string,title: string, description: string) {
    await prisma.post.update({
        where: { id: postId },
        data: {
            title: title,
            description: description,
        },
    });
}

export async function updatePostDesc(postId: string, description: string) {
    await prisma.post.update({
        where: { id: postId },
        data: {
            description: description,
        },
    });
}


export async function getPostById(postId: string) {
    return prisma.post.findUnique({
        where: { id: postId },
        include: {
            images: true,
            user: true,
        },
    });
}