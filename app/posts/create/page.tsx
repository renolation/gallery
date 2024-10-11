import EditorDescription from "@/components/post/shared/editor-description";
import PostTags from "@/components/post/shared/post-tags";
import NameInputPost from "@/components/post/create/name-input-post";
import PostPanel from "@/components/post/create/post-panel";
import ListImagePost from "@/components/post/create/list-image-post";


export default function PostCreate() {

    return (
        <div className="container max-w-screen-xl mx-auto">
            <p>Create new post</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-6">
                <div className="flex min-w-0 flex-1 flex-col gap-6">

                    <NameInputPost initialName={''}/>
                    <PostTags tags={[]}/>
                    <EditorDescription text={''}/>
                    <ListImagePost images={[]}/>
                </div>
                <div className="flex flex-col gap-3 sm:w-72">
                    <PostPanel />
                </div>
            </div>
        </div>

    );

}