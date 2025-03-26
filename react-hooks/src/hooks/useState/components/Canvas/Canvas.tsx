import { useState } from 'react';
import { useImmer } from 'use-immer'
import Background from './BackGround';
import Box from './box';

const initialPosition = {
    x: 0,
    y: 0
};

export default function Canvas() {
    const [shape, setShape] = useImmer({
        color: 'orange',
        position: initialPosition
    });

    function handleMove(dx: number, dy: number) {
        setShape(draft => {
            const newX = draft.position.x + dx;
            const newY = draft.position.y + dy;
            const boundedX = Math.max(0, Math.min(newX, 256 - 96)); // 256 (width of container) - 96 (width of box)
            const boundedY = Math.max(0, Math.min(newY, 256 - 96)); // 256 (height of container) - 96 (height of box)
            draft.position.x = boundedX;
            draft.position.y = boundedY;
        });
    }

    function handleColorChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setShape(draft => {
            draft.color = e.target.value;
        });
    }

    return (
        <div className='flex flex-col items-center'>
            <select
                value={shape.color}
                onChange={handleColorChange}
                className='mb-4 p-2 border rounded'
            >
                <option value="orange">orange</option>
                <option value="lightpink">lightpink</option>
                <option value="aliceblue">aliceblue</option>
            </select>
            <div className='relative w-64 h-64 border border-gray-300'>
                <Background position={shape.position} />
                <Box
                    color={shape.color}
                    position={shape.position}
                    onMove={handleMove}
                >
                    Drag me!
                </Box>
            </div>
        </div>
    );
}
