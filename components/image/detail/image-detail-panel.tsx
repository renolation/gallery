'use client';

import {Paper, Flex, Badge, Text, Divider, Group, ActionIcon} from "@mantine/core";
import React from "react";
import {IconCopy, IconShare3} from "@tabler/icons-react";
import PromptText from "@/components/image/detail/prompt-text";
import {useClipboard} from '@mantine/hooks';

export default function ImageDetailPanel() {

    const clipboard = useClipboard({timeout: 500});
    const copyPrompt = () => {
        clipboard.copy('copyPrompt');
    }
    const copyNevPrompt = () => {
        clipboard.copy('copyNevPrompt');
    }

    return (
        <div style={{width: '27%', maxWidth: '450px', overflowY: 'auto'}}>
            <Paper withBorder>
                <Paper className={"p-4"}>
                    <Text size={"xl"}>Generation data</Text>

                    <Text size={"lg"}>Resources used</Text>
                    <Flex
                        justify="space-between"
                        align="center"
                        direction="row"
                        wrap="nowrap"
                        gap="md"
                    >
                        <Text>Deep Negative V1.x</Text>
                        <div style={{flexGrow: 1}}></div>
                        <Badge variant="light" color="lime" size="lg" radius="sm">Embedding</Badge>
                        <Badge variant="light" color="lime" size="lg" radius="sm">1</Badge>
                    </Flex>
                    <Text size={"xs"} c="dimmed">V1 75T</Text>


                    <Flex
                        justify="space-between"
                        align="center"
                        direction="row"
                        wrap="nowrap"
                        gap="md"
                    >
                        <Text>Deep Negative V1.x</Text>
                        <div style={{flexGrow: 1}}></div>
                        <Badge variant="light" color="lime" size="lg" radius="sm">Embedding</Badge>
                        <Badge variant="light" color="lime" size="lg" radius="sm">1</Badge>
                    </Flex>
                    <Text size={"xs"} c="dimmed">V1 75T</Text>
                    <Divider my="md"/>
                    <Flex
                        justify="space-between"
                        align="flex-start"
                        direction="row"
                        wrap="nowrap"
                        gap="xs"
                    >
                        <Text size={"lg"}>Prompt</Text>
                        <Badge variant="light" color="lime" size="xs" radius="sm">CIVITAI GENERATOR</Badge>
                        <Badge variant="light" color="lime" size="xs" radius="sm">TXCT2IMG</Badge>
                        <div style={{flexGrow: 1}}></div>
                        <ActionIcon variant="transparent" color="gray" aria-label="Copy" onClick={copyPrompt}>
                            <IconCopy stroke={1.5}/>
                        </ActionIcon>
                    </Flex>

                    <PromptText
                        text={" Craft a captivating vibrant dark black-neon caption for a photo capturing the essence of a\n" +
                            "cyborg Bedouin sorcerer in fight stance, defying expectations by conjuring a whimsical robot\n" +
                            "from an oversized sedge hat. ethereal, smoky backdrop. throwing a translucent\n" +
                            "orange/tanslucent purple/black iaidow, weapon, katana, holding sword, ready to draw, sheathed,\n" +
                            "unsheathing, scabbard,, very detailed,"}/>

                    <Flex
                        justify="space-between"
                        align="flex-start"
                        direction="row"
                        wrap="nowrap"
                        gap="xs"
                    >
                        <Text size={"lg"}>Negative Prompt</Text>

                        <div style={{flexGrow: 1}}></div>
                        <ActionIcon variant="transparent" color="gray" aria-label="Copy" onClick={copyNevPrompt}>
                            <IconCopy stroke={1.5}/>
                        </ActionIcon>
                    </Flex>

                    <PromptText
                        text={" signature, text, easynegative, bad proportions, low resolution, bad, ugly, terrible, render,\n" +
                            "watermark, signature, worst quality, low quality, normal quality, lowres, simple background,\n" +
                            "inaccurate limb, extra fingers, fewer fingers"}/>
                    <Divider my="md"/>
                    <Text size={"lg"}>Other metadata</Text>
                    <Group>
                        <Badge variant="filled" radius="sm" size="sm">
                            Guidance: 3.5
                        </Badge>
                        <Badge variant="filled" radius="sm" size="sm">
                            Steps: 50
                        </Badge>
                        <Badge variant="filled" radius="sm" size="sm">
                            Sampler: DPM++ 2M Karras
                        </Badge>
                        <Badge variant="filled" radius="sm" size="sm">
                            Seed: 2031206838
                        </Badge>
                        <Badge variant="filled" radius="sm" size="sm">
                            Clip skip: 2
                        </Badge>


                    </Group>
                </Paper>
            </Paper>
        </div>
    );
}