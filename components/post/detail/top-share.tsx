"use client";

import {Button, Menu,  ActionIcon, rem, useMantineTheme, Flex} from '@mantine/core';
import {

    IconShare3,
    IconDotsVertical, IconFlag,
    IconCopy, IconBrandFacebookFilled, IconBrandReddit,
    IconBrandXFilled,
    IconInbox
} from '@tabler/icons-react';
import ShareComponent from "@/components/shared/share-component";

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
            <ShareComponent/>


             {/*todo: add later*/}
            {/*<Menu transitionProps={{transition: 'pop'}} position="bottom-end" withinPortal>*/}
            {/*    <Menu.Target>*/}
            {/*        <ActionIcon*/}
            {/*            variant="light"*/}
            {/*            radius="xl"*/}
            {/*        >*/}
            {/*            <IconDotsVertical style={{width: rem(16), height: rem(16)}} stroke={1.5}/>*/}
            {/*        </ActionIcon>*/}
            {/*    </Menu.Target>*/}
            {/*    <Menu.Dropdown>*/}
            {/*        <Menu.Item*/}
            {/*            leftSection={*/}
            {/*                <IconFlag*/}
            {/*                    style={{width: rem(13), height: rem(13)}}*/}
            {/*                    stroke={1.5}*/}
            {/*                    color={theme.colors.blue[5]}*/}
            {/*                />*/}
            {/*            }*/}
            {/*        >*/}
            {/*            Report*/}
            {/*        </Menu.Item>*/}
            {/*    </Menu.Dropdown>*/}
            {/*</Menu>*/}
        </Flex>
    )
}