"use client";

import {Text, Title, Flex, CloseButton, Avatar, Badge, Group, Button, ActionIcon, Menu, rem} from '@mantine/core';
import {useRouter} from "next/navigation";
import {
    IconAdjustments, IconBrandFacebookFilled, IconBrandReddit, IconBrandXFilled,
    IconCopy,
    IconDotsVertical,
    IconDownload, IconInbox,
    IconPhoto,
    IconShare3,
    IconX
} from "@tabler/icons-react";
import {useDispatch} from "react-redux";
import {toggleRightPanel} from "@/lib/features/image/detail/toggle-right-panel";
import {getDownloadUrl} from '@/action/utils-action';
import {useClipboard} from "@mantine/hooks";
import ShareComponent from "@/components/shared/share-component";


export default function ImageDetailTop({id, imageUrl, postId}: {
    id: string,
    imageUrl: string,
    postId: string | null
}) {
    const router = useRouter();
    const dispatch = useDispatch();
    const clipboard = useClipboard({timeout: 200});

    const handleViewPost = () => {
        router.push(`/posts/${postId}`);
    }


    const downloadUrl = getDownloadUrl(imageUrl);

    const handleDownload = () => {
        if (typeof window !== 'undefined') {
            window.location.href = downloadUrl;
        }
    };
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
                <ActionIcon variant="filled" color="rgba(212, 178, 178, 0.4)" radius="xl"
                            onClick={() => router.back()}
                            aria-label="Close">
                    <IconX style={{width: '70%', height: '70%'}} stroke={1.5}/>
                </ActionIcon>
                <div className="pl-10"/>


                <Button leftSection={<IconPhoto size={14}/>} variant="light" size="xs"
                        radius="xl" onClick={handleViewPost}>
                    View Post
                </Button>


                <div style={{flexGrow: 1}}></div>


                <Group gap={5}>
                    <Button leftSection={<IconDownload size={14}/>} variant="light" size="xs"
                            radius="xl" onClick={handleDownload}>
                        Download
                    </Button>
                    {/*{typeof window !== 'undefined' && <ShareComponent url={window.location.href} />}*/}

                    <ShareComponent/>
                    {/*<ActionIcon variant="filled" color="rgba(212, 178, 178, 0.4)" size="lg" radius="xl"*/}
                    {/*            aria-label="Settings">*/}
                    {/*    <IconDotsVertical style={{width: '70%', height: '70%'}} stroke={1.5}/>*/}
                    {/*</ActionIcon>*/}
                </Group>

                <div className="pr-10"/>

                <ActionIcon

                    onClick={() => dispatch(toggleRightPanel())}
                    style={{marginLeft: '10px', marginRight: '10px'}}
                    variant="filled" color="rgba(212, 178, 178, 0.4)" size="md" radius="xl"
                    aria-label="Settings">
                    <IconAdjustments style={{width: '70%', height: '70%'}} stroke={1.5}/>
                </ActionIcon>

            </Flex>
        </>
    );
}