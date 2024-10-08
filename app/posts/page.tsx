import {getPostById, getPosts} from "@/lib/prisma/prima-post";
import Image from "next/image";
import Link from "next/link";
import PostMasonry from "@/components/post/home/posts-mansory";
import {getTagsByPosts} from "@/lib/prisma/prisma-tag";
import TagListPost from "@/components/post/home/tag-list-post";
import {Suspense} from "react";


export default async function PostsPage() {


    const tags = await getTagsByPosts();
    return (
        <>
            <TagListPost tags={tags.map((tag: { name: string }) => tag.name)} />
            <div className="py-3"/>
            <PostMasonry/>
        </>
    );
}