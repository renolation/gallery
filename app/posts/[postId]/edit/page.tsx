import {getPostById} from "@/lib/prisma/prima-post";
import NameInputPost from "@/components/post/create/name-input-post";
import PostTags from "@/components/post/create/post-tags";
import CreatePostMain from "@/components/post/create/create-post-main";
import CreatePostPanel from "@/components/post/create/create-post-panel";


export default async function EditPostPage({params}: { params: { postId: string } }) {
    const post = await getPostById(params.postId);

    if (!post) {
        return <div>Post not found</div>;
    }


    return (
        <div className="container max-w-screen-xl mx-auto">
            <p>Create new post</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-6">
                <div className="flex min-w-0 flex-1 flex-col gap-6">

                    <NameInputPost initialName={post.title || ''}/>
                    <PostTags/>
                    {/*<EditorCreate/>*/}
                    <CreatePostMain images={post.images}/>

                </div>
                <div className="flex flex-col gap-3 sm:w-72">
                    <CreatePostPanel/>
                </div>
            </div>
        </div>
    );
}