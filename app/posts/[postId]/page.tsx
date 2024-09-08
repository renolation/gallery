import {getPostById} from "@/lib/prisma/prima-post";
import ImageList from "@/components/post/edit/image-list";


export default async function PostDetailPage({ params }: { params: { postId: string } }){

     const post = await getPostById(params.postId);

    if (!post) {
        return <div>Post not found</div>;
    }

        post.description = post.description!.replace(/\n/g, '<br/>');

        return (
            <div className="flex flex-col items-center w-1/2 mx-auto">
                <h1 className="text-2xl font-bold">Post ID: {post.id}</h1>
                <br/>
                <h2 className="text-xl">{post.title ?? "Title"}</h2>
                <h2 className="text-lg">{post.user.username ?? "User"}</h2>
                <br/>
                <ImageList images={post.images}/>
                <div className="mt-4" dangerouslySetInnerHTML={{__html: post.description}}></div>
            </div>
        );
}