"use client";

import {Button, Menu,  ActionIcon, rem, useMantineTheme, Flex} from '@mantine/core';
import {

    IconShare3,
    IconDotsVertical, IconFlag,
    IconCopy, IconBrandFacebookFilled, IconBrandReddit,
    IconBrandXFilled,
    IconInbox
} from '@tabler/icons-react';

export default function TopShare() {
    const theme = useMantineTheme();

    return (
        <Flex
            mih={50}
            w="100%"
            gap="xs"
            justify="flex-end"
            align="center"
            direction="row"
            wrap="wrap"
        >
            <Menu shadow="md" width={200}>
                <Menu.Target>
                    <Button leftSection={<IconShare3 size={14}/>} variant="light" size="xs"
                            radius="xl">
                        Share
                    </Button>
                </Menu.Target>

                <Menu.Dropdown>
                    <Menu.Label>Actions</Menu.Label>
                    <Menu.Item leftSection={<IconCopy style={{width: rem(14), height: rem(14)}}/>}>
                        Copy Url
                    </Menu.Item>

                    <Menu.Divider/>

                    <Menu.Label>Social</Menu.Label>
                    <Menu.Item
                        leftSection={<IconBrandFacebookFilled style={{width: rem(14), height: rem(14)}}/>}
                    >
                       Share to Facebook
                    </Menu.Item>
                    <Menu.Item
                        leftSection={<IconBrandReddit style={{width: rem(14), height: rem(14)}}/>}
                    >
                       Share to Reddit
                    </Menu.Item>
                    <Menu.Item
                        leftSection={<IconBrandXFilled style={{width: rem(14), height: rem(14)}}/>}
                    >
                       Share to X
                    </Menu.Item>
                    <Menu.Item
                        leftSection={<IconInbox style={{width: rem(14), height: rem(14)}}/>}
                    >
                       Send to Email
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>

            <Menu transitionProps={{transition: 'pop'}} position="bottom-end" withinPortal>
                <Menu.Target>
                    <ActionIcon
                        variant="light"
                        radius="xl"
                    >
                        <IconDotsVertical style={{width: rem(16), height: rem(16)}} stroke={1.5}/>
                    </ActionIcon>
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Item
                        leftSection={
                            <IconFlag
                                style={{width: rem(13), height: rem(13)}}
                                stroke={1.5}
                                color={theme.colors.blue[5]}
                            />
                        }
                    >
                        Report
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </Flex>
    )
}