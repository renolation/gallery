import {getPostById} from "@/lib/prisma/prima-post";
import {Text, Title, Flex, Button, CloseButton, Avatar, Badge} from '@mantine/core';
import {ImageCard} from "@/components/image/shared/image-card";
import TopDetail from "@/components/post/detail/top-detail";
import TopShare from "@/components/post/detail/top-share";
import {getUserIdFromSession} from "@/lib/auth";
import PostTagsDetail from "@/components/post/detail/post-tags-detail";
import ShareComponent from "@/components/shared/share-component";


export default async function PostDetailPage({params}: { params: { postId: string } }) {
    const post = await getPostById(params.postId);

    if (!post) {
        return <div>Post not found</div>;
    }

    post.description = post.description!.replace(/\n/g, '<br/>');
    const userId = await getUserIdFromSession();

    console.log(post.tags);

    return (
        <div className="flex flex-col xs:w-9/10 sm:w-4/5 md:w-3/5 lg:w-1/2 mx-auto m-4">
            {/*name*/}
            <TopDetail title={post.title ?? ""} userId={userId} postId={post.id}/>





            <Flex
                mih={50}
                w="100%"
                gap="md"
                justify="flex-start"
                align="center"
                direction="row"
                wrap="wrap"
                className={"py-6"}
            >

                <Avatar radius="xl"/>
                <Text>Renolation</Text>
                {/* Spacer */}

                <div style={{width: 'md'}}></div>
                <Badge color="green">Follow</Badge>
                <div style={{flexGrow: 1}}></div>
                <ShareComponent />
            </Flex>



            {post.images.map((image) => (
                <div key={image.id} className="pb-6 w-full">
                    <ImageCard imageId={image.id} imageUrl={image.imageUrl}/>
                </div>
            ))}

            <PostTagsDetail tags={post.tags.map(tag => ({id: tag.tagId, name: tag.tag.name}))}/>



            <div className="mt-4 mb-24" dangerouslySetInnerHTML={{__html: post.description}}></div>

        </div>
    );
}