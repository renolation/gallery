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

export async function createImageWithoutPostId(userId: string, imageUrl: string) {
    return prisma.image.create({
        data: {
            userId: userId,
            imageUrl: imageUrl,
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

export async function getImages(page: number, limit: number, tag?: string) {
    return prisma.image.findMany({

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
}

export async function updateOrder(imageIds: string[]) {
    for (let i = 0; i < imageIds.length; i++) {
        await prisma.image.update({
            where: {
                id: imageIds[i]
            },
            data: {
                order: i
            }
        });
    }
}

export async function updateImage(imageId: string, prompt: string, negativePrompt: string,
                                  guidanceScale: number, steps: number, sampler: string, seed: number) {
    return prisma.image.update({
        where: {
            id: imageId
        },
        data: {
            prompt: prompt,
            nevPrompt: negativePrompt,
            guidanceScale: guidanceScale,
            steps: steps,
            sampler: sampler,
            seed: seed
        }
    });
}

export async function changeFeaturedImage(imageId: string, featured: boolean) {
    return prisma.image.update({
        where: {
            id: imageId
        },
        data: {
            isFeatured: featured
        },

    })
}

export async function getFeaturedImages(page: number, limit: number) {
    return prisma.image.findMany({
        where: {
            isFeatured: true
        },
        orderBy: {
            updatedAt: 'asc'
        },
        skip: (page - 1) * limit,
        take: limit,
    });
}