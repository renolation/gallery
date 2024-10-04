import prisma from "@/lib/prisma/prisma";

export async function getPosts() {
    const posts = await prisma.post.findMany({
        include: {
            images: {
                include: {
                    tags: {
                        select: {
                            tag: {
                                select: {
                                    name: true,
                                    description: true
                                }
                            }
                        }
                    }
                }
            },
            user: true,
        },
        orderBy: {
            createdAt: 'asc'
        }
    });

    return posts.map(post => ({
        ...post,
        images: post.images.map(image => ({
            ...image,
            tags: image.tags.map(tagRelation => ({
                name: tagRelation.tag.name,
                description: tagRelation.tag.description
            }))
        }))
    }));
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
            images: {
                include: {
                    tags: {
                        include: {
                            tag: true,
                        },
                    }
                }
            },
            user: true,
            tags: {
                include: {
                    tag: true,
                },
            },
        },
    });
}