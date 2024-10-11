"use client"

import {getUserIdFromSession} from '@/lib/auth';
import {Text, Title, Flex, CloseButton, Avatar, Badge, ActionIcon} from '@mantine/core';
import {useRouter} from "next/navigation";
import {useEffect, useState} from 'react';
import {IconPencil} from "@tabler/icons-react";


export default function TopDetail({title, userId, postId}: { title: string, userId: number | null, postId: number }) {

    const router = useRouter();

    const handleEdit = () => {
        router.push(`/posts/${postId}/edit`);
    }

    return (
        <>
            <Flex mih={50}
                  w="100%"
                  justify="space-between"
                  align="center"
                  direction="row"
                  wrap="nowrap">
                <Title order={1}>{title}</Title>
                {userId && <ActionIcon variant="light" color="grape" aria-label="Edit" onClick={handleEdit}>
                    <IconPencil style={{width: '70%', height: '70%'}}  radius="xs" stroke={1.5}/>
                </ActionIcon>}
            </Flex>
        </>
    );
}