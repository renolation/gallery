"use client";
import {TextInput} from '@mantine/core';
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateInputPostName} from "@/lib/features/post/shared/input-post-name";
import {RootState} from "@/lib/store";


export default function NameInputPost({initialName}: { initialName: string | null }) {
    const dispatch = useDispatch();

    useEffect(() => {
        if (initialName) {
            dispatch(updateInputPostName(initialName));
        }
    }, [initialName]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateInputPostName(event.target.value));
    };
    const inputPostName = useSelector((state: RootState) => state.inputPostName.value);

    return (
        <>
            <TextInput
                variant="filled"
                placeholder="Input name"
                value={inputPostName}
                onChange={handleChange}
            />
        </>
    );
}