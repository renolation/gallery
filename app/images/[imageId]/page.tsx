"use client";
import React, {useState} from 'react';
import {Button, Paper} from '@mantine/core';

export default function ImageDetail({params}: { params: { imageId: string } }) {
    const [isPanelVisible, setIsPanelVisible] = useState(true);

    const togglePanel = () => {
        setIsPanelVisible(!isPanelVisible);
    };


    return (
        <div style={{ display: 'flex', height: '80vh' }}>
            <div style={{ flex: 1, padding: '20px' }}>
                <h1>Image Detail</h1>
                <Button onClick={togglePanel}>
                    {isPanelVisible ? 'Hide' : 'Show'} Panel
                </Button>
                {/* Left panel content */}
            </div>
            {isPanelVisible && (
                <div style={{ width: '30%', overflowY: 'auto', padding: '20px' }}>
                    <Paper withBorder>
                        <h1>Pane 2</h1>
                        {/* Right panel content */}
                        <p>Scrollable content goes here...</p>
                        <p>More content...</p>
                        <p>Even more content...</p>
                        <p>Scrollable content goes here...</p>
                        <p>More content...</p>
                        <p>Even more content...</p>
                        <p>Scrollable content goes here...</p>
                        <p>More content...</p>
                        <p>Even more content...</p>  <p>Scrollable content goes here...</p>
                        <p>More content...</p>
                        <p>Even more content...</p>
                        <p>Scrollable content goes here...</p>
                        <p>More content...</p>
                        <p>Even more content...</p>
                        <p>Scrollable content goes here...</p>
                        <p>More content...</p>
                        <p>Even more content...</p>
                        <p>Scrollable content goes here...</p>
                        <p>More content...</p>
                        <p>Even more content...</p>
                        <p>Scrollable content goes here...</p>
                        <p>More content...</p>
                        <p>Even more content...</p>  <p>Scrollable content goes here...</p>
                        <p>More content...</p>
                        <p>Even more content...</p>
                        <p>Scrollable content goes here...</p>
                        <p>More content...</p>
                        <p>Even more content...</p>


                        {/* Add more content to make it scrollable */}
                    </Paper>
                </div>
            )}
        </div>
    );
}