"use client";
import {
    Card,
    Text,
    Group,
    Center,
    rem,
    useMantineTheme,
    Autocomplete,
    ActionIcon,
    Button,
    Flex,
    Title, CloseButton
} from '@mantine/core';
import {IconEye, IconMessageCircle, IconPhoto, IconShare, IconAdjustments, IconInfoCircle} from '@tabler/icons-react';

import classes from './image-card.module.css';

export function ImageCard({imageUrl}: { imageUrl: string }) {
    const theme = useMantineTheme();

    return (
        <Card
            p={0}
            shadow="lg"
            className={classes.card}
        >
            <img src={imageUrl} alt="Image" className={classes.image}/>

            <div className={classes.reaction}>
                <div className="flex flex-row">
                    <div className="bg-blue-300 bg-opacity-10 flex flex-row">
                        {Array.from({length: 4}).map((_, index) => (
                            <Button
                                key={index}
                                leftSection="😢"
                                variant="filled"
                                styles={{
                                    root: {
                                        backgroundColor: 'rgba(128, 128, 128, 0.5)', // Gray color with 50% opacity
                                        border: 'none', // Remove outline
                                        margin: '4px',  // Add margin
                                    },
                                }}
                            >
                                423
                            </Button>
                        ))}
                    </div>
                </div>


            </div>
            <div className={classes.info}>
                <ActionIcon variant="subtle" color="white" size="xl" radius="xl" aria-label="Settings">
                    <IconInfoCircle style={{width: '60%', height: '60%'}} stroke={1.5}/>
                </ActionIcon>
            </div>

        </Card>
    );
}