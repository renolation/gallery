"use client";
import {
    Card,
    useMantineTheme,
    Button,
    Flex,
} from '@mantine/core';

import classes from './image-card.module.css';
import ShareImage from "@/components/image/share-image";
import Link from 'next/link';

export function ImageCard({imageId, imageUrl}: { imageId: string, imageUrl: string }) {
    const theme = useMantineTheme();

    return (
        <Link href={`/images/${imageId}`} className={classes.link}>
        <Card
            p={0}
            shadow="lg"
            className={classes.card}
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
                    {Array.from({length: 4}).map((_, index) => (
                        <Button
                            key={index}
                            leftSection="😢"
                            variant="filled"
                            size="xs"
                            styles={{
                                root: {
                                    backgroundColor: 'rgba(128, 128, 128, 0.5)', // Gray color with 50% opacity
                                    border: 'none', // Remove outline
                                },
                            }}
                        >
                            22
                        </Button>
                    ))}
                </Flex>
            </div>
            <div className={classes.share}>
                <ShareImage />
            </div>

        </Card>
        </Link>
    );
}