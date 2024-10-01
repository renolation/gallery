"use client";
import {TextInput} from '@mantine/core';
import {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {updateInputPostName} from "@/lib/features/post/shared/input-post-name";


export default function NameInputPost({initialName = ''}: { initialName: string }) {
    const dispatch = useDispatch();
    const [name, setName] = useState(initialName);

    useEffect(() => {
        setName(initialName);
    }, [initialName]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
        dispatch(updateInputPostName(event.target.value));
    };

    return (
        <>
            <TextInput
                variant="filled"
                placeholder="Input name"
                value={name}
                onChange={handleChange}
            />
        </>
    );
}