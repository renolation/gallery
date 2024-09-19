"use client";


import { useRef } from 'react';
import { Text, Group, Button, rem, useMantineTheme } from '@mantine/core';
import {Dropzone, IMAGE_MIME_TYPE, MIME_TYPES} from '@mantine/dropzone';
import { IconCloudUpload, IconX, IconDownload } from '@tabler/icons-react';
import classes from './drop-zone-button.module.css';

interface DropzoneButtonProps {
  onDrop: (files: File[]) => void;
}


export default function DropzoneButton({ onDrop }: DropzoneButtonProps) {
  const theme = useMantineTheme();
  const openRef = useRef<() => void>(null);

  return (
    <div className={classes.wrapper}>
      <Dropzone
        openRef={openRef}
        onDrop={onDrop}
        className={classes.dropzone}
        radius="md"
        accept={IMAGE_MIME_TYPE}
        maxSize={30 * 1024 ** 2}
      >
        <div style={{ pointerEvents: 'none' }}>
          <Group justify="center">
            <Dropzone.Accept>
              <IconDownload
                style={{ width: rem(50), height: rem(50) }}
                color={theme.colors.blue[6]}
                stroke={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                style={{ width: rem(50), height: rem(50) }}
                color={theme.colors.red[6]}
                stroke={1.5}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconCloudUpload style={{ width: rem(50), height: rem(50) }} stroke={1.5} />
            </Dropzone.Idle>
          </Group>

          <Text ta="center" fw={700} fz="lg" mt="xl">
            <Dropzone.Accept>Attach up to 20 files</Dropzone.Accept>
            <Dropzone.Reject>File are not supported</Dropzone.Reject>
            <Dropzone.Idle>Drag images here or click to select files</Dropzone.Idle>
          </Text>
          <Text ta="center" fz="sm" mt="xs" c="dimmed">
           Videos cannot exceed 750 MB, 4k resolution, or 245 seconds in duration.
          </Text>
          <Text ta="center" fz="sm" mt="xs" c="blue">
            Accepted file types: .png, .jpeg, .jpg, .webp, .mp4, .webm
          </Text>
        </div>
      </Dropzone>

       <Button className={classes.control} size="md" radius="xl" onClick={() => openRef.current?.()}>
        Select files
      </Button>
    </div>
  );
}