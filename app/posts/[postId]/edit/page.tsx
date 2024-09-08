import EditPostForm from "@/components/post/edit/edit-post-form";
import {getPostById} from "@/lib/prisma/prima-post";
import ImageList from "@/components/post/edit/image-list";
import Tiptap from "@/components/editor/tiptap";
import SaveEditButton from "@/components/post/edit/save-edit-button";


export default async function EditPostPage({ params }: { params: { postId: string } }) {
    const post = await getPostById(params.postId);

    if (!post) {
    return <div>Post not found</div>;
}

    return (
        <div>
            <h1>Edit Post: {params.postId}</h1>
            <br />
            <br />
            <br />
            <SaveEditButton />
            <br />
            <br />
            <br />
            <br />

            <Tiptap content={post.description || '<p></p>'} postId={post.id} />

            <p>Upload new file</p>
            <EditPostForm />

            <p>List image</p>
            <ImageList images={post.images} />

        </div>
    );
}