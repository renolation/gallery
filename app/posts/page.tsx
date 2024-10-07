import {getPostById, getPosts} from "@/lib/prisma/prima-post";
import Image from "next/image";
import Link from "next/link";
import PostGrid from "@/components/post/home/post-grid";
import PostMasonry from "@/components/post/home/posts-mansory";
import {getTagsByPosts} from "@/lib/prisma/prisma-tag";
import TagList from "@/components/post/home/tag-list";
import {Suspense} from "react";


export default async function PostsPage() {

    const posts = await getPosts();
    const tags = await getTagsByPosts();
    return (
        <>
            <TagList tags={tags.map(tag => tag.name)}/>
            <div className="py-3"/>
            <PostMasonry posts={posts}/>
        </>
    );
}