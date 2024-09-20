"use client";
import {AppShell, Burger, Group, rem, Text, UnstyledButton} from '@mantine/core';
import {useHeadroom, useDisclosure} from '@mantine/hooks';
import {MantineLogo} from '@mantinex/mantine-logo';
import classes from './app-shell.module.css'
const lorem =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe molestiae nobis necessitatibus laboriosam officia, reprehenderit, earum fugiat?';

export function Headroom({children}: { children: React.ReactNode }) {
    const pinned = useHeadroom({fixedAt: 120});
    const [opened, {toggle}] = useDisclosure();
    return (
        <AppShell header={{height: 60, collapsed: !pinned, offset: false}}
                  padding="md">
              <AppShell.Header>
        <Group h="100%" px="md">
          <Group justify="space-between" style={{ flex: 1 }}>
            <MantineLogo size={30} />
            <Group ml="xl" gap={0} visibleFrom="xs">
              <UnstyledButton className={classes.control}>Home</UnstyledButton>
              <UnstyledButton className={classes.control}>Blog</UnstyledButton>
              <UnstyledButton className={classes.control}>Contacts</UnstyledButton>
              <UnstyledButton className={classes.control}>Support</UnstyledButton>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

            <AppShell.Main pt={`calc(${rem(60)} + var(--mantine-spacing-md))`}>
                {children}
            </AppShell.Main>
        </AppShell>
    );
}