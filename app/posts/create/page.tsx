import {CreateNewPostForm} from "@/components/post/create/create-new-post-form";
import NewPostForm from "@/components/post/create/new-post-form";
import EditImageCard from "@/components/post/create/edit-image-card";


export default function PostCreate() {
    return (

        <div className="container max-w-screen-xl mx-auto">
            <p>Create new post</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-6">
                <div className="flex min-w-0 flex-1 flex-col gap-6">
                    <NewPostForm/>

                </div>
                <div className="flex flex-col gap-3 sm:w-72">
                    <p>Some text</p>
                </div>
            </div>
        </div>

    );

}