import prisma from "@/lib/prisma/prisma";

export async function getPosts(page: number, limit: number, tag?: string) {
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
        },
        where: tag ? {
            tags: {
                some: {
                    tag: {
                        name: tag
                    }
                }
            }
        } : {},
        orderBy: {
            createdAt: 'asc'
        },
        skip: (page - 1) * limit,
        take: limit,
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


export async function createPost(email: string, title: string, description: string) {
    const newPost = await prisma.post.create({
        data: {
            email: email,
            title: title,
            description: description,
        },
    });
    return newPost.id;
}


export async function updatePostWithImage(postId: number, imageId: number) {
    await prisma.post.update({
        where: {id: postId},
        data: {
            images: {
                connect: {id: imageId}
            }
        },
    });
}

export async function updatePostWithImages(postId: number, imageIds: number[]) {
    await prisma.post.update({
        where: {id: postId},
        data: {
            images: {
                connect: imageIds.map(id => ({id}))
            }
        },
    });
}

export async function updatePostDetail(postId: number, title: string, description: string) {
    await prisma.post.update({
        where: {id: postId},
        data: {
            title: title,
            description: description,
        },
    });
}

export async function updatePostDesc(postId: number, description: string) {
    await prisma.post.update({
        where: {id: postId},
        data: {
            description: description,
        },
    });
}


export async function getPostById(postId: number) {
    return prisma.post.findUnique({
        where: {id: postId},
        include: {
            images: {
                orderBy: {
                    order: 'asc'
                },
                include: {
                    tags: {
                        include: {
                            tag: true,
                        },
                    }
                }
            },
            tags: {
                include: {
                    tag: true,
                },
            },
        },
    });
}