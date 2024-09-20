"use client";
import {TextInput} from '@mantine/core';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {updateInputPostName} from "@/lib/features/post/shared/input-post-name";

export default function NameInputPost() {
        const dispatch = useDispatch();

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(updateInputPostName(event.target.value));
        };

    return (
        <>
            <TextInput
                variant="filled"
                placeholder="Input name"
                onChange={handleChange}
            />
        </>
    );
}