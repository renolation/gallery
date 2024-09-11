"use client"

import {Text, Title, Flex, CloseButton, Avatar, Badge} from '@mantine/core';
import {useRouter} from "next/navigation";


export default function TopDetail({title}: { title: string }) {

        const router = useRouter();


    return (
      <>
      <Flex mih={50}
                  w="100%"
                  justify="space-between"
                  align="center"
                  direction="row"
                  wrap="nowrap">
                <Title order={1}>{title}</Title>
                <CloseButton size="lg" onClick={() => router.back()}/>
      </Flex>
      </>
  );
}