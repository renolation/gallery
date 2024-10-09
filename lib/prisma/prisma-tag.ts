import prisma from "@/lib/prisma/prisma";


export async function createTag(tagName: string) {
    let tag = await prisma.tag.findUnique({
        where: {
            name: tagName,
        },
    });

    // If the tag does not exist, create it
    if (!tag) {
        tag = await prisma.tag.create({
            data: {
                name: tagName,
            },
        });
        return tag;
    }
    return tag;
}

export async function getTagsByPosts() {
      return prisma.tag.findMany({
        where: {
            posts: {
                some: {}
            }
        }
    });
}



export async function getTagsByImages() {
      return prisma.tag.findMany({
        where: {
            images: {
                some: {}
            }
        }
    });
}

export async function addTagToPost(postId: number, tagName: string) {
    // Find the tag by its name
    const tag = await prisma.tag.findUnique({
        where: {
            name: tagName,
        },
    });

    if (!tag) {
        throw new Error(`Tag with name ${tagName} does not exist`);
    }

    const existingTag = await prisma.postsOnTags.findFirst({
        where: {
            postId: postId,
            tagId: tag.id,
        }
    });

    if (existingTag) {
        await prisma.postsOnTags.delete({
            where: {
                postId_tagId: {
                    postId: postId,
                    tagId: tag.id,
                }
            }
        });
    } else {
        await prisma.postsOnTags.create({
            data: {
                postId: postId,
                tagId: tag.id,
            }
        });
    }
}

export async function addTagsToPost(postId: number, tagNames: string[]) {
    for (const tagName of tagNames) {
        // Find the tag by its name
        let tag = await prisma.tag.findUnique({
            where: {
                name: tagName,
            },
        });

        // If the tag does not exist, create it
        if (!tag) {
            tag = await prisma.tag.create({
                data: {
                    name: tagName,
                },
            });
        }

        // Check if the tag is already associated with the post
        const existingTag = await prisma.postsOnTags.findFirst({
            where: {
                postId: postId,
                tagId: tag.id,
            },
        });

        if (existingTag) {
            // // If the tag is already associated, remove it
            // await prisma.postsOnTags.delete({
            //     where: {
            //         postId_tagId: {
            //             postId: postId,
            //             tagId: tag.id,
            //         },
            //     },
            // });
            // console.log(`Tag ${tagName} removed from post ${postId}`);
        } else {
            // If the tag is not associated, add it
            await prisma.postsOnTags.create({
                data: {
                    postId: postId,
                    tagId: tag.id,
                },
            });
            console.log(`Tag ${tagName} added to post ${postId}`);
        }
    }
}

export async function createOrUpdateTagForPost(postId: number, tagName: string) {
    // Check if the tag with the given name exists
    let tag = await prisma.tag.findUnique({
        where: {
            name: tagName,
        },
    });

    // If the tag does not exist, create it
    if (!tag) {
        tag = await prisma.tag.create({
            data: {
                name: tagName,
            },
        });
    }

    // Check if the tag is already associated with the post
    const existingTag = await prisma.postsOnTags.findFirst({
        where: {
            postId: postId,
            tagId: tag.id,
        },
    });

    if (existingTag) {
        // If the tag is already associated, remove it
        await prisma.postsOnTags.delete({
            where: {
                postId_tagId: {
                    postId: postId,
                    tagId: tag.id,
                },
            },
        });
        console.log(`Tag ${tagName} removed from post ${postId}`);
    } else {
        // If the tag is not associated, add it
        await prisma.postsOnTags.create({
            data: {
                postId: postId,
                tagId: tag.id,
            },
        });
        console.log(`Tag ${tagName} added to post ${postId}`);
    }
}

export async function addTagToImage(imageId: number, tagName: string) {
    const tag = await createTag(tagName);

    const existingTag = await prisma.imagesOnTags.findFirst({
        where: {
            imageId: imageId,
            tagId: tag.id,
        }
    });
    if (existingTag) {
        await prisma.imagesOnTags.delete({
            where: {
                imageId_tagId: {
                    imageId: imageId,
                    tagId: tag.id,
                }
            }
        });
    } else {
        await prisma.imagesOnTags.create({
            data: {
                imageId: imageId,
                tagId: tag.id,
            }
        });

    }
}
