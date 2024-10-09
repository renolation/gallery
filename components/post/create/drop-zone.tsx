"use client";


import React, {useRef, useState} from 'react';
import classes from './drop-zone.module.css';
import {dropImageAction} from "@/action/post-action";
import {useDispatch} from "react-redux";
import {addImage} from "@/lib/features/post/edit/edit-post-image-slice";
import {Loader, useMantineTheme} from "@mantine/core";
import {Dropzone, IMAGE_MIME_TYPE, MIME_TYPES} from '@mantine/dropzone';
import {Text, Group, Button, rem} from '@mantine/core';
import {IconCloudUpload, IconDownload, IconX} from "@tabler/icons-react";
import {usePathname} from "next/navigation";
import { editPostAction } from '@/action/post-action';

export default function DropZone() {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const pathname = usePathname();
    const theme = useMantineTheme();
    const openRef = useRef<() => void>(null);
    const isPostEditRoute = /^\/posts\/\d+\/edit$/.test(pathname);
    const postEditRouteMatch = pathname.match(/^\/posts\/(\d+)\/edit$/);




    const onDrop = async (files: File[]) => {
        setLoading(true);
        try {
            for (const image of files) {
                if (image) {
                    const formData = new FormData();
                    formData.append('image', image);
                    const imageObj = await dropImageAction(formData);
                    if (imageObj) {
                        dispatch(addImage({ ...imageObj, tags: [] }));
                        if (isPostEditRoute && postEditRouteMatch) {
                            await editPostAction(parseInt(postEditRouteMatch[1], 10), imageObj.id);
                        }
                    }
                }
            }
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className={classes.wrapper}>
            <Dropzone
                openRef={openRef}
                onDrop={onDrop}
                className={classes.dropzone}
                loading={loading}
                radius="md"
                accept={IMAGE_MIME_TYPE}
                maxSize={30 * 1024 ** 2}
            >
                <div style={{pointerEvents: 'none'}}>
                    <Group justify="center">
                        <Dropzone.Accept>
                            <IconDownload
                                style={{width: rem(50), height: rem(50)}}
                                color={theme.colors.blue[6]}
                                stroke={1.5}
                            />
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                            <IconX
                                style={{width: rem(50), height: rem(50)}}
                                color={theme.colors.red[6]}
                                stroke={1.5}
                            />
                        </Dropzone.Reject>
                        <Dropzone.Idle>
                            <IconCloudUpload style={{width: rem(50), height: rem(50)}} stroke={1.5}/>
                        </Dropzone.Idle>
                    </Group>

                    <Text ta="center" fw={700} fz="lg" mt="xl">
                        <Dropzone.Accept>Drop files here</Dropzone.Accept>
                        <Dropzone.Reject>Pdf file less than 30mb</Dropzone.Reject>
                        <Dropzone.Idle>Upload resume</Dropzone.Idle>
                        <Dropzone.Accept>Attach up to 20 files</Dropzone.Accept>
                        <Dropzone.Reject>File are not supported</Dropzone.Reject>
                        <Dropzone.Idle>Drag images here or click to select files</Dropzone.Idle>
                    </Text>
                    <Text ta="center" fz="sm" mt="xs" c="dimmed">
                        Drag&apos;n&apos;drop files here to upload. We can accept only <i>.pdf</i> files that
                        are less than 30mb in size.
                        Videos cannot exceed 750 MB, 4k resolution, or 245 seconds in duration.
                    </Text>
                    <Text ta="center" fz="sm" mt="xs" c="blue">
                        Accepted file types: .png, .jpeg, .jpg, .webp, .mp4, .webm
                    </Text>
                </div>
            </Dropzone>

        </div>
    );


}