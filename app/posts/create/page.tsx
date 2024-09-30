import EditorCreate from "@/components/post/create/editor-create";
import PostTags from "@/components/post/create/post-tags";
import NameInputPost from "@/components/post/create/name-input-post";
import CreatePostPanel from "@/components/post/create/create-post-panel";
import CreatePostMain from "@/components/post/create/create-post-main";


export default function PostCreate() {

    return (
        <div className="container max-w-screen-xl mx-auto">
            <p>Create new post</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-6">
                <div className="flex min-w-0 flex-1 flex-col gap-6">

                    <NameInputPost initialName={''}/>
                    <PostTags/>
                    <EditorCreate/>
                    <CreatePostMain images={[]}/>
                </div>
                <div className="flex flex-col gap-3 sm:w-72">
                    <CreatePostPanel />
                </div>
            </div>
        </div>

    );

}