"use client";
import {Autocomplete, Group, Burger, rem} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {IconSearch} from '@tabler/icons-react';
import {MantineLogo} from '@mantinex/mantine-logo';
import classes from './header-search.module.css';
import NavLink from "@/components/header/nav-link";
import React from "react";
import Link from "next/link";
import {usePathname} from 'next/navigation';

const links = [
    {link: '/posts', label: 'Posts'},
    {link: '/images', label: 'Images'},
    {link: '/posts/create', label: 'Create'},
    {link: '/posts/14c1b7d2-3ddd-4d49-9886-a98030cd0db0', label: 'Detail'},
    {link: '/images/d23e1531-8a3c-4ffa-9634-e96b3f4addab', label: 'Detail iamge'},

];

export function HeaderSearch() {

    const pathname = usePathname();
    const [opened, {toggle}] = useDisclosure(false);

    const isImageDetailRoute = pathname.startsWith('/images/');
    const isPostDetailRoute = pathname.startsWith('/posts/');
    // if (isImageDetailRoute || isPostDetailRoute) {
    //     return null;
    // }


    const items = links.map((link) => (

        <NavLink key={link.label}
                 href={link.link}>{link.label}</NavLink>

    ));

    return (
        <header className="bg-green-800 dark:bg-blue-900 sticky top-0 w-full z-50">

            <div className={classes.inner}>
                <Group>
                    <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm"/>
                    <Link href={'/'}><MantineLogo size={28}/></Link>
                </Group>

                <Group>
                    <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
                        {items}
                    </Group>
                    <Autocomplete
                        className={classes.search}
                        placeholder="Search"
                        leftSection={<IconSearch style={{width: rem(16), height: rem(16)}} stroke={1.5}/>}
                        data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
                        visibleFrom="xs"
                    />
                </Group>
            </div>
        </header>
    );
}