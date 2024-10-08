"use client";
import {Button, Menu, rem} from "@mantine/core";
import {
    IconBrandFacebookFilled,
    IconBrandReddit,
    IconBrandXFilled,
    IconCopy,
    IconInbox,
    IconShare3
} from "@tabler/icons-react";
import {useClipboard} from "@mantine/hooks";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";


export default function ShareComponent() {
    const clipboard = useClipboard({timeout: 200});
    const pathname = usePathname()
    const [fullUrl, setFullUrl] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setFullUrl(window.location.origin + pathname);
        }
    }, [pathname]);

    const handleCopyUrl = () => {
        clipboard.copy(fullUrl);
    };

    const handleShareToFacebook = () => {

        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`;
        window.open(facebookShareUrl, '_blank');
    };

    const handleShareToReddit = () => {
        const redditShareUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(fullUrl)}`;
        window.open(redditShareUrl, '_blank');
    };

    const handleShareToEmail = () => {
        const emailShareUrl = `mailto:?subject=Check%20this%20out&body=${encodeURIComponent(fullUrl)}`;
        window.open(emailShareUrl, '_self');
    };

    const handleShareToX = () => {
        const xShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}`;
        window.open(xShareUrl, '_blank');
    };

    return <>
        <Menu shadow="md" width={200}>
            <Menu.Target>
                <Button leftSection={<IconShare3 size={14}/>} variant="light" size="xs"
                        radius="xl">
                    Share
                </Button>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Label>Actions</Menu.Label>

                <Menu.Item leftSection={<IconCopy style={{width: rem(14), height: rem(14)}}/>}
                           onClick={handleCopyUrl}>
                    Copy Url
                </Menu.Item>
                <Menu.Divider/>

                <Menu.Label>Social</Menu.Label>
                <Menu.Item
                    leftSection={<IconBrandFacebookFilled style={{width: rem(14), height: rem(14)}}/>}
                    onClick={handleShareToFacebook}
                >
                    Share to Facebook
                </Menu.Item>
                <Menu.Item
                    leftSection={<IconBrandReddit style={{width: rem(14), height: rem(14)}}/>}
                    onClick={handleShareToReddit}
                >
                    Share to Reddit
                </Menu.Item>
                <Menu.Item
                    leftSection={<IconBrandXFilled style={{width: rem(14), height: rem(14)}}/>}
                    onClick={handleShareToX}
                >
                    Share to X
                </Menu.Item>
                <Menu.Item
                    leftSection={<IconInbox style={{width: rem(14), height: rem(14)}}/>}
                    onClick={handleShareToEmail}
                >
                    Send to Email
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    </>

}