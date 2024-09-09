import Counter from "@/components/post/counter";
import Result from "@/components/post/result";
import ResetButton from "@/components/post/reset-button";
import {getPostById, getPosts} from "@/lib/prisma/prima-post";
import Image from "next/image";
import Link from "next/link";
import {ImageCard} from "@/components/image/image-card";

export default async function PostsPage() {

    const posts = await getPosts();

    return (
        <>

            <div className="w-screen flex flex-col gap-10 mt-10 items-center">
                {posts.map((post) => (
                    <div key={post.id} className="w-1/2 border-2 border-gray-300 p-4">
                        <h1>{post.title}</h1>
                        <p>{post.description}</p>
                        <p>{post.user.username}</p>
                        <Image
                            src={post.images[0].imageUrl}
                            width={90}
                            height={160}
                            alt={post.images[0].title ?? ""}
                        />
                        <Link href={`/posts/${post.id}`}>Detail</Link>
                    </div>
                ))}
            </div>
        </>
    );
}