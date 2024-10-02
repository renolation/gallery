"use client";
import {RootState} from "@/lib/store";
import {useDispatch, useSelector} from "react-redux";
import {Alert, Group, TextInput} from "@mantine/core";
import {IconInfoCircle} from "@tabler/icons-react";
import AutoSizeTextInput from "@/components/utils/AutoSizeTextInput";
import {useRef} from "react";
import {createTagAction} from "@/action/post-action";
import {addTag} from "@/lib/features/post/shared/tag-post-slice";

export default function PostTags() {

    const dispatch = useDispatch();


    const tagsPost = useSelector((state: RootState) => state.tagPost.value);
    const inputRef = useRef<HTMLInputElement>(null);


    const handleEditDone = async () => {
        console.log('Enter key pressed');
        if (inputRef.current) {
            console.log('TextInput value:', inputRef.current.value);
            await createTagAction(inputRef.current.value);
            dispatch(addTag(inputRef.current.value));
            inputRef.current.blur();
            inputRef.current.value = '';
        }

    }

    return (
        <>
            <Group>
                {
                    tagsPost.map((tag, index) =>
                        <div key={index}>

                            <Alert variant="outline" color="gray" radius="xl" withCloseButton title={tag}

                                   onClose={() => {
                                       // Custom close button action
                                       console.log(`Closed alert for tag: ${tag}`);
                                   }}
                                   styles={{root: {padding: "6px", height: "35px"}}}

                            >
                            </Alert>
                        </div>
                    )
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