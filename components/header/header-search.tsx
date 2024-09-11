"use client";
import {Autocomplete, Group, Burger, rem} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {IconSearch} from '@tabler/icons-react';
import {MantineLogo} from '@mantinex/mantine-logo';
import classes from './header-search.module.css';
import NavLink from "@/components/header/nav-link";
import React from "react";
import Link from "next/link";

const links = [
    {link: '/posts', label: 'Posts'},
    {link: '/images', label: 'Images'},
    {link: '/posts/create', label: 'Create'},
    {link: '/posts/2518483c-54de-4d3b-a3c0-c2f1f00e2e4b', label: 'Detail'},
];

export function HeaderSearch() {
    const [opened, {toggle}] = useDisclosure(false);

    const items = links.map((link) => (

        <NavLink key={link.label}
                 href={link.link}

        >{link.label}</NavLink>

    ));

    return (
        <header className="bg-green-800 dark:bg-blue-900 top-0 w-full z-50">

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