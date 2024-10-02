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
    }
}

export async function addTagToPost(postId: string, tagId: string) {
    const existingTag = await prisma.postsOnTags.findFirst({
        where: {
            postId: postId,
            tagId: tagId,
        }
    });
    if(existingTag){
        await prisma.postsOnTags.delete({
            where: {
                postId_tagId: {
                    postId: postId,
                    tagId: tagId,
                }
            }
        })
    } else {
        await prisma.postsOnTags.create({
            data: {
                postId: postId,
                tagId: tagId,
            }
        });
    }
}

export async function createOrUpdateTagForPost(postId: string, tagName: string) {
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
