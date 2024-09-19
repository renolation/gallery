import {CreateNewPostForm} from "@/components/post/create/create-new-post-form";
import NewPostForm from "@/components/post/create/new-post-form";
import EditImageCard from "@/components/post/create/edit-image-card";
import EditorCreate from "@/components/post/create/editor-create";
import PostTags from "@/components/post/create/post-tags";
import NameInputPost from "@/components/post/create/name-input-post";
import CreateNewPostRightPanel from "@/components/post/create/create-new-post-right-panel";
import CreatePostMain from "@/components/post/create/create-post-main";


export default function PostCreate() {
    return (

        <div className="container max-w-screen-xl mx-auto">
            <p>Create new post</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-6">
                <div className="flex min-w-0 flex-1 flex-col gap-6">

                    <NameInputPost/>
                    <PostTags/>
                    <EditorCreate/>
                    <CreatePostMain />

                </div>
                <div className="flex flex-col gap-3 sm:w-72">
                    <CreateNewPostRightPanel />
                </div>
            </div>
        </div>

    );

}