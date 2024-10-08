"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import {styled} from '@mui/material/styles';
import {Image as ImageDB, Post} from "@prisma/client";
import {ImageCard} from "@/components/image/shared/image-card";
import ImageList from '@mui/material/ImageList';
import {PostCard} from './post-card';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/lib/store";
import {Suspense, useEffect} from "react";
import {getImagesAction} from "@/action/image-action";
import {LIMIT_PER_PAGE} from "@/lib/constants";
import {getPostsAction} from "@/action/post-action";
import {setImagePage} from "@/lib/features/image/selecting-tag-image-home";
import {Button} from "@mantine/core";
import {setPostPage} from "@/lib/features/post/home/selecting-tag-post-home";
import Loading from "@/app/images/loading";

const Label = styled(Paper)(({theme}) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

type PostWithImages = Post & {
    images: ImageDB[];
    tags: {
        tag: {
            name: string;
            description: string | null;
        };
    }[];
};

export default function PostMasonry() {
    const dispatch = useDispatch();
    const [posts, setPosts] = React.useState<PostWithImages[]>([]);
    const selectingTagPost = useSelector((state: RootState) => state.selectingTagPostHome.value);
    const currentPage = useSelector((state: RootState) => state.selectingTagPostHome.page);


    useEffect(() => {
        async function fetchPosts() {
            const fetchedPosts = await getPostsAction(1, LIMIT_PER_PAGE);
            setPosts(fetchedPosts);
        }

        fetchPosts().then(r => console.log('Loaded more posts'));
    }, [selectingTagPost]);


    const loadMore = () => {
        async function fetchPosts() {
            const nextPage = currentPage + 1;
            const fetchedPosts = selectingTagPost ? await getPostsAction(nextPage, LIMIT_PER_PAGE, selectingTagPost) : await getPostsAction(nextPage, LIMIT_PER_PAGE);
            setPosts(prevPosts => [...prevPosts, ...fetchedPosts]);
            dispatch(setPostPage(nextPage));
        }

        fetchPosts().then(r => console.log('Loaded more posts'));
    }

    const filteredPosts = selectingTagPost
        ? posts.filter(post =>
            post.tags.some(tag => tag.tag.name === selectingTagPost)
        )
        : posts;
    return (
        <Box>
            <Suspense fallback={<Loading/>}>
                <Masonry columns={{xs: 1, sm: 2, md: 3, lg: 4}} spacing={2}>
                    {filteredPosts.map((post, index) => (
                        <div key={index}>
                            <PostCard
                                key={post.id}
                                postId={post.id}
                                imageUrl={post.images.length > 0 ? post.images[0].imageUrl : 'https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219876/cld-sample-3.jpg'}
                            />
                        </div>
                    ))}
                </Masonry>
            </Suspense>
            {posts.length > 0 && <div className="flex justify-center">
                <Button variant="outline" color="gray" onClick={loadMore}>Load more</Button>
            </div>}
        </Box>
    );
}

