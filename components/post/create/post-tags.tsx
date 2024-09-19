"use client";
import {RootState} from "@/lib/store";
import {useSelector} from "react-redux";
import {Group} from "@mantine/core";

export default function PostTags() {
    const tagsPost = useSelector((state: RootState) => state.tagPost.value);
    return (
        <>
            <Group>
                {
                tagsPost.map((tag, index) =>
                    <div key={index}
                         className="bg-gray-500 text-white px-3 py-1 rounded-full hover:bg-blue-700 cursor-pointer">
                        {tag}
                    </div>
                )
                }
            </Group>
        </>
    );
}