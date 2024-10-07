"use client";
import {useRef} from 'react';
import {ActionIcon, Button} from "@mantine/core";
import {IconChevronLeft, IconChevronRight} from "@tabler/icons-react";
import {useDispatch, useSelector} from "react-redux";
import {removeSelectingTagPostHome, setSelectingTagPostHome} from "@/lib/features/post/home/selecting-tag-post-home";
import {RootState} from "@/lib/store";

export default function TagListPost({tags}: { tags: string[] }) {

    const listRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    const scrollLeft = () => {
        if (listRef.current) {
            listRef.current.scrollBy({left: -200, behavior: 'smooth'});
        }
    };

    const selectingTagPost = useSelector((state: RootState) => state.selectingTagPostHome.value);


    const scrollRight = () => {
        if (listRef.current) {
            listRef.current.scrollBy({left: 200, behavior: 'smooth'});
        }
    };

    const selectTag = (tag: string) => {
        console.log(tag);
        if(selectingTagPost === tag) {
            dispatch(removeSelectingTagPostHome());
            return;
        }
        dispatch(setSelectingTagPostHome(tag))
    };


    return (
        <div className="relative flex items-center">
            <ActionIcon variant="light" color="cyan" aria-label="Left" className="absolute left-0">
                <IconChevronLeft style={{width: '70%', height: '70%'}} stroke={1.5} onClick={scrollLeft}/>
            </ActionIcon>

            <div className="flex overflow-x-auto scroll-smooth mx-10" ref={listRef}>
                {tags.map((tag, index) => (
                    <Button onClick={() => selectTag(tag)} key={index} variant="light" color="gray"
                            className="mx-2">{tag}</Button>
                ))}
            </div>
            <ActionIcon variant="light" color="cyan" aria-label="Right" className="absolute right-0">
                <IconChevronRight style={{width: '70%', height: '70%'}} stroke={1.5} onClick={scrollRight}/>
            </ActionIcon>
        </div>
    );
}