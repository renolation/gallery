"use client";

import {Button, Menu, Group, ActionIcon, rem, useMantineTheme, Flex} from '@mantine/core';
import {
    IconTrash,
    IconBookmark,
    IconCalendar,
    IconChevronDown,
    IconShare3,
    IconDotsVertical, IconFlag
} from '@tabler/icons-react';
import classes from './top-share.module.css';

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
            <Button leftSection={<IconShare3 size={14}/>} variant="light" size="xs"
                    radius="xl">
                Share
            </Button>
            <Menu transitionProps={{transition: 'pop'}} position="bottom-end" withinPortal>
                <Menu.Target>
                    <ActionIcon
                        variant="light"
                        radius="xl" aria-label="Settings"
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