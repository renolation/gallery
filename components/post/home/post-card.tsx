"use client";
import {
    Card,

    Flex, Group, Text
} from '@mantine/core';

import classes from './post-card.module.css';
import Link from 'next/link';
import {IconHeart, IconPhoto} from "@tabler/icons-react";
import {useRouter} from 'next/navigation';

export function PostCard({imageUrl}: { imageUrl: string }) {
    const router = useRouter();

    const handleImageClick = () => {
        console.log('Image clicked');
        router.push(`/posts/14c1b7d2-3ddd-4d49-9886-a98030cd0db0`);
    }
    return (


        <Card
            p={0}
            shadow="lg"
            className={classes.card}
            onClick={handleImageClick}
        >
            <img src={imageUrl} alt="Image" className={classes.image}/>


            <div className={classes.reaction}>
                <Flex
                    mih={50}
                    w="100%"
                    gap="xs"
                    justify="flex-start"
                    align="flex-end"
                    direction="row"
                    wrap="wrap"
                >
                    <Group gap={6} justify="space-between" mt="xl" className="bg-gray-700/30 rounded p-1.5 px-2.5">
                        <Group gap={3}>
                            <IconPhoto
                                size={18}
                                stroke={1.5}/>
                            <Text>12</Text>
                        </Group>
                        <Group gap={3}>
                            <IconHeart
                                size={18}
                                stroke={1.5}/>
                            <Text>222</Text>
                        </Group>
                    </Group>
                </Flex>
            </div>
        </Card>

    );
}