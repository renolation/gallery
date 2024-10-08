"use client";
import React, {useState} from 'react';
import {Button, Flex, Group, Paper} from '@mantine/core';
import ImageDetailTop from '@/components/image/detail/image-detail-top';
import ImageDetailPanel from "@/components/image/detail/image-detail-panel";
import {Image as ImageDB} from "@prisma/client";

import {useSelector} from "react-redux";
import {RootState} from '@/lib/store';
import Image from "next/image";

export default function ImageDetail({image}: { image: ImageDB }) {

    const toggleRightPanelState = useSelector((state: RootState) => state.toggleRightPanel.value);

    return (
        <div style={{display: 'flex', height: '88vh'}}>
            <div style={{flex: 1, height: '90vh', display: "flex", flexDirection: "column"}}>

                <ImageDetailTop id={image.id} imageUrl={image.imageUrl} postId={image.postId}/>

                {/*//image*/}
                <div style={{display: 'flex', flexDirection: 'column', flex: "1"}}>
                    <div style={{flex: 1, position: 'relative'}} className="m-2">
                        <Image
                            src={image.imageUrl}
                            alt={image.imageUrl}
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    {/*Reaction*/}
                    {/*<Flex*/}
                    {/*    className={"mb-4"}*/}
                    {/*    gap={3}*/}
                    {/*    justify="center" align="center" style={{width: '100%'}}>*/}
                    {/*    {Array.from({length: 4}).map((_, index) => (*/}
                    {/*        <Button key={index} leftSection="😢"*/}
                    {/*                justify = "space-around"*/}
                    {/*                variant="light"*/}
                    {/*                size="compact-lg"*/}
                    {/*                radius="xl">*/}
                    {/*            22*/}
                    {/*        </Button>*/}
                    {/*    ))}*/}
                    {/*</Flex>*/}
                </div>


            </div>


            {toggleRightPanelState && (
                <ImageDetailPanel image={image}/>
            )}
        </div>
    );
}