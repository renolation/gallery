"use client"

import {Text, Title, Flex, CloseButton, Avatar, Badge, Group, Button, ActionIcon} from '@mantine/core';
import {useRouter} from "next/navigation";
import {IconAdjustments, IconDotsVertical, IconDownload, IconShare3, IconX} from "@tabler/icons-react";
import {useDispatch} from "react-redux";
import {toggleRightPanel} from "@/lib/features/image-detail/toggle-right-panel";


export default function ImageDetailTop({id}: { id: string }) {
    const router = useRouter();
  const dispatch = useDispatch();

    return (
        <>
            <Flex mih={50}
                  w="100%"
                  justify="space-between"
                  align="center"
                  direction="row"
                  wrap="nowrap">
                {/*<CloseButton*/}
                {/*    size="lg" onClick={() => router.back()}/>*/}
                 <ActionIcon variant="filled" color="rgba(212, 178, 178, 0.4)" size="lg" radius="xl"
                          onClick={() => router.back()}
                             aria-label="Close">
                        <IconX style={{width: '70%', height: '70%'}} stroke={1.5}/>
                    </ActionIcon>
                <div className="pl-10"/>
                <Group gap={8}>
                    <Button leftSection={<IconShare3 size={14}/>} variant="light" size="xs"
                            radius="xl">
                        Share
                    </Button>
                    <Button leftSection={<IconShare3 size={14}/>} variant="light" size="xs"
                            radius="xl">
                        Share
                    </Button>

                </Group>


                <div style={{flexGrow: 1}}></div>


                <Group gap={5}>
                    <ActionIcon variant="filled" color="rgba(212, 178, 178, 0.4)" size="lg" radius="xl"
                                aria-label="Settings">
                        <IconDownload style={{width: '70%', height: '70%'}} stroke={1.5}/>
                    </ActionIcon>
                    <ActionIcon variant="filled" color="rgba(212, 178, 178, 0.4)" size="lg" radius="xl"
                                aria-label="Settings">
                        <IconShare3 style={{width: '70%', height: '70%'}} stroke={1.5}/>
                    </ActionIcon>
                    <ActionIcon variant="filled" color="rgba(212, 178, 178, 0.4)" size="lg" radius="xl"
                                aria-label="Settings">
                        <IconDotsVertical style={{width: '70%', height: '70%'}} stroke={1.5}/>
                    </ActionIcon>
                </Group>

                <div className="pr-10"/>

                <ActionIcon
                    onClick={() => dispatch(toggleRightPanel())}
                    style={{marginLeft: '10px', marginRight: '10px'}}
                    variant="filled" color="rgba(212, 178, 178, 0.4)" size="lg" radius="xl"
                    aria-label="Settings">
                    <IconAdjustments style={{width: '70%', height: '70%'}} stroke={1.5}/>
                </ActionIcon>

            </Flex>
        </>
    );
}