"use client";

import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {addAllTags, addTag, removeTag} from "@/lib/features/post/shared/tag-post-slice";
import {addImageTag, removeImageTag} from "@/lib/features/post/edit/edit-post-image-slice";
import {RootState} from "@/lib/store";
import {Alert, Group, TextInput} from "@mantine/core";
import {createTagAction, imageTagAction} from "@/action/post-action";
import {Tag} from "@prisma/client";

export default function ImageTags({imageIndex}: { imageIndex: number }) {

    const dispatch = useDispatch();

    const editPostImageState = useSelector((state: RootState) => state.editPostImage.images);


    const inputRef = useRef<HTMLInputElement>(null);


    const handleEditDone = async () => {
        console.log('Enter key pressed');
        if (inputRef.current) {
            console.log('TextInput value:', inputRef.current.value);
            await imageTagAction(editPostImageState[imageIndex].id, inputRef.current.value);

            dispatch(addImageTag({index: imageIndex, tagName: inputRef.current.value}));
            inputRef.current.blur();
            inputRef.current.value = '';
        }
    }

    const handleRemoveTag = async (tag: string) => {
        await imageTagAction(editPostImageState[imageIndex].id, tag);

        dispatch(removeImageTag({index: imageIndex, tagName: tag}));
    }

    return (
        <>
            <Group>

                {
                    editPostImageState[imageIndex].tags.map((tag, index2) => (
                        <div key={index2}>
                            <Alert variant="outline" color="gray" radius="xl" withCloseButton title={tag.name}
                                   onClose={() => {
                                       // Custom close button action
                                       console.log(`Closed alert for tag: ${tag.name}`);
                                       handleRemoveTag(tag.name);
                                   }}
                                   styles={{root: {padding: "6px", height: "35px"}}}

                            >
                            </Alert>

                        </div>
                    ))
                }


                <TextInput
                    ref={inputRef}
                    placeholder="Add"
                    style={{
                        minWidth: '150px',
                        height: 'auto',
                    }}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            handleEditDone();
                        }
                    }}
                    styles={{
                        input: {
                            backgroundColor: 'transparent',
                            border: '1px solid white',
                            borderRadius: '24px',
                            height: '35px',
                            width: '100px'
                        }
                    }}
                />
            </Group>
        </>
    );
}