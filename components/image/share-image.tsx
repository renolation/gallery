import {Menu, Button, Text, rem, ActionIcon} from '@mantine/core';
import {
    IconSettings,
    IconSearch,
    IconPhoto,
    IconMessageCircle,
    IconFlag,
    IconTrash,
    IconArrowsLeftRight, IconDotsVertical, IconBookmark, IconEye,
    IconUserOff,
} from '@tabler/icons-react';

export default function ShareImage() {
    return (
        <Menu shadow="md">
            <Menu.Target>
                <ActionIcon
                    variant="light"
                    size="lg"
                    color="red"
                    radius="xl"
                >
                    <IconDotsVertical style={{width: rem(22), height: rem(22)}} stroke={1.5}/>
                </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Item leftSection={<IconBookmark style={{width: rem(14), height: rem(14)}}/>}>
                    Save image to collection
                </Menu.Item>
                <Menu.Item leftSection={<IconFlag style={{width: rem(14), height: rem(14)}}/>}>
                    Report image
                </Menu.Item>
                <Menu.Item leftSection={<IconUserOff style={{width: rem(14), height: rem(14)}}/>}>
                    Hide content from this user
                </Menu.Item>

            </Menu.Dropdown>
        </Menu>
    );
}