import {getPostById} from "@/lib/prisma/prima-post";
import {Text, Title, Flex, Button, CloseButton, Avatar, Badge} from '@mantine/core';
import {ImageCard} from "@/components/image/image-card";
import TopDetail from "@/components/post/detail/top-detail";
import {IconShare3, IconShare2} from "@tabler/icons-react";
import TopShare from "@/components/post/detail/top-share";


export default async function PostDetailPage({params}: { params: { postId: string } }) {
    const post = await getPostById(params.postId);

    if (!post) {
        return <div>Post not found</div>;
    }

    post.description = post.description!.replace(/\n/g, '<br/>');
    return (
        <div className="flex flex-col items-center xs:w-9/10 sm:w-4/5 md:w-3/5 lg:w-1/2 mx-auto m-4">
            {/*name*/}
            <TopDetail title={post.title ?? ""}/>

            <TopShare />


            <Flex
                mih={50}
                w="100%"
                gap="md"
                justify="flex-start"
                align="center"
                direction="row"
                wrap="wrap"
            >
                <Avatar radius="xl"/>
                <Text>Renolation</Text>
                {/* Spacer */}
                {/*<div style={{flexGrow: 1}}></div>*/}
                <div style={{width: 'md'}}></div>
                <Badge color="green">Follow</Badge>
            </Flex>


            <br/>
            {post.images.map((image) => (
                <div key={image.id} className="pb-6 w-full">
                    <ImageCard imageUrl={image.imageUrl}/>
                </div>
            ))}
            <div className="mt-4 mb-24" dangerouslySetInnerHTML={{__html: post.description}}></div>

        </div>
    );
}