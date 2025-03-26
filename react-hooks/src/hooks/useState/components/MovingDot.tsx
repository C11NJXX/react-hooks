import { useState } from 'react';

export default function MovingDot() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });
    return (
        <div onPointerMove={e => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                setPosition({
                    x: Math.max(0, Math.min(x, rect.width)),
                    y: Math.max(0, Math.min(y, rect.height))
                });
            }}
            className="relative w-64 h-64 bg-amber-300">
            <div className="absolute bg-red-500 rounded-full" style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                left: -10,
                top: -10,
                width: 20,
                height: 20,
            }} />
        </div>
    );
}
