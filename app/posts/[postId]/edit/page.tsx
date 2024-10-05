import {getPostById} from "@/lib/prisma/prima-post";
import NameInputPost from "@/components/post/create/name-input-post";
import PostTags from "@/components/post/create/post-tags";
import CreatePostMain from "@/components/post/create/create-post-main";
import CreatePostPanel from "@/components/post/create/create-post-panel";
import {Status} from "@prisma/client";
import {Image as ImageDB} from "@prisma/client";
import {ImageWithTags} from "@/lib/features/post/edit/edit-post-image-slice";
import EditorCreate from "@/components/post/create/editor-create";


export default async function EditPostPage({params}: { params: { postId: string } }) {

    const post = await getPostById(params.postId);


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
                    <PostTags tags={post.tags.map((tag) => tag.tag.name)}/>
                    <EditorCreate text={post.description}/>
                    <CreatePostMain images={post.images.map(image => ({
                        ...image,
                        tags: image.tags.map(tagRelation => ({
                            name: tagRelation.tag.name,
                            description: tagRelation.tag.description
                        }))
                    })) as ImageWithTags[]}/>

                </div>
                <div className="flex flex-col gap-3 sm:w-72">
                    <CreatePostPanel/>
                </div>
            </div>
        </div>
    );
}