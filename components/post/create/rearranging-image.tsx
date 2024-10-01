"use client";

import {useSelector} from "react-redux";
import {RootState} from "@/lib/store";
import React, {useState} from "react";
import {DragDropContext, Droppable, Draggable} from '@hello-pangea/dnd';
import {Group, Card, Text} from '@mantine/core';
import {IconArrowsMaximize, IconShare3} from "@tabler/icons-react";



export default function RearrangingImage() {
    const editPostImageState = useSelector((state: RootState) => state.editPostImage.images);
    const [items, setItems] = useState(editPostImageState);


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
                            <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className="p-2 border rounded"
                                    >
                                        <Card shadow="sm" padding="lg" style={{
                                            width: 200,
                                            height: 200,
                                            position: 'relative',
                                            backgroundImage: `url(${item.imageUrl})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}>
                                            <IconArrowsMaximize style={{
                                                width: '40%',
                                                height: '40%',
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)'
                                            }}
                                                                color="gray"
                                                                stroke={1.5} />
                                        </Card>


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