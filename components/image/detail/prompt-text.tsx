"use client";
import {Text} from "@mantine/core";
import React from "react";

export default function PromptText({ text }: { text: string }) {


    const [isShowMore, setIsShowMore] = React.useState(false);
    const toggleShowMore = () => setIsShowMore(!isShowMore);
    const maxLength = 150; // Set your desired max length here
    const truncatedText = text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

    return (
        <>
        <Text c="dimmed">
            {isShowMore ? text : truncatedText}
        </Text>
            {text.length > maxLength && (
                <span onClick={toggleShowMore} style={{color: '#4dabf7', cursor: 'pointer'}}>
                    {isShowMore ? ' Show less' : ' Show more'}
                </span>
            )}
            </>
    );
}