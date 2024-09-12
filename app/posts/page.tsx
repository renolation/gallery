
import {getPostById, getPosts} from "@/lib/prisma/prima-post";
import Image from "next/image";
import Link from "next/link";
import PostGrid from "@/components/post/home/post-grid";


export default async function PostsPage() {

    const posts = await getPosts();
    return (
        <>
           <PostGrid />
        </>
    );
}