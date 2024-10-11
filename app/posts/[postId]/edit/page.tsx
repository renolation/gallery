import {getPostById} from "@/lib/prisma/prima-post";
import NameInputPost from "@/components/post/create/name-input-post";
import PostTags from "@/components/post/shared/post-tags";
import ListImagePost from "@/components/post/create/list-image-post";
import PostPanel from "@/components/post/create/post-panel";
import {ImageWithTags} from "@/lib/features/post/edit/edit-post-image-slice";
import EditorDescription from "@/components/post/shared/editor-description";


export default async function EditPostPage({params}: { params: { postId: string } }) {

    const post = await getPostById(parseInt(params.postId, 10));


    if (!post) {
        return <div>Post not found</div>;
    }


    // if (post && post.images) {
    //     post.images.forEach(image => {
    //         const tags = image.tags.map(tagRelation => tagRelation.tag.name);
    //         // console.log(`Image ID: ${image.id}, Tags: ${tags.join(', ')}`);
    //     });
    // }


    return (
        <div className="container max-w-screen-xl mx-auto">
            <p>Create new post</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-6">
                <div className="flex min-w-0 flex-1 flex-col gap-6">

                    <NameInputPost initialName={post.title}/>
                    <PostTags tags={post.tags.map((tag: { tag: { name: string } }) => tag.tag.name)}/>
                    <EditorDescription text={post.description}/>
                   <ListImagePost images={post.images.map((image: {
                        id: number;
                        tags: {
                            tag: {
                                id: number;
                                name: string;
                                description: string | null;
                                createdAt: Date;
                                updatedAt: Date;
                            };
                            imageId: number;
                            tagId: number;
                            assignedAt: Date;
                        }[];
                    }) => ({
                        ...image,
                        tags: image.tags.map(tagRelation => ({
                            name: tagRelation.tag.name,
                            description: tagRelation.tag.description ?? ''
                        }))
                    })) as ImageWithTags[]}/>

                </div>
                <div className="flex flex-col gap-3 sm:w-72">
                    <PostPanel/>
                </div>
            </div>
        </div>
    );
}