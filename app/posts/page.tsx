
import {getPostById, getPosts} from "@/lib/prisma/prima-post";
import Image from "next/image";
import Link from "next/link";
import PostGrid from "@/components/post/home/post-grid";
import PostMasonry from "@/components/post/home/posts-mansory";


export default async function PostsPage() {

    const posts = await getPosts();

    return (
        <>
           <PostMasonry  posts={posts}/>
        </>
    );
}