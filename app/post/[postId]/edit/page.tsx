import EditPostForm from "@/components/post/edit/edit-post-form";
import {getPostById} from "@/lib/prisma/prima-post";
import ImageList from "@/components/post/edit/image-list";


export default async function EditPostPage({ params }: { params: { postId: string } }) {
    const post = await getPostById(params.postId);

    if (!post) {
    return <div>Post not found</div>;
}

    return (
        <div>
            <h1>Edit Post: {params.postId}</h1>
            <p>Upload new file</p>
            <EditPostForm />

            <p>List image</p>
            <ImageList images={post.images} />

        </div>
    );
}