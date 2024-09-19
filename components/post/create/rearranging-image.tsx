"use client";

import {useSelector} from "react-redux";
import {RootState} from "@/lib/store";
import {useState} from "react";
import {DragDropContext, Droppable, Draggable} from '@hello-pangea/dnd';
import {Group, Card, Text} from '@mantine/core';


const initialItems = [
    {id: '1', content: 'Item 1'},
    {id: '2', content: 'Item 2'},
    {id: '3', content: 'Item 3'},
];

export default function RearrangingImage() {

    const editPostImageState = useSelector((state: RootState) => state.editPostImage.images);
    const [items, setItems] = useState(initialItems);


    const handleDragEnd = (result: any) => {
        if (!result.destination) return;

        const reorderedItems = Array.from(items);
        const [removed] = reorderedItems.splice(result.source.index, 1);
        reorderedItems.splice(result.destination.index, 0, removed);

        setItems(reorderedItems);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable" direction="horizontal">
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="flex space-x-4"
                    >
                        {items.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className="p-2 border rounded"
                                    >
                                        {item.content}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}