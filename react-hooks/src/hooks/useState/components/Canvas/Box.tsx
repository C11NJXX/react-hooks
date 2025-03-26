import { ReactNode, useState } from 'react';

interface Props {
    children: ReactNode,
    color: string,
    position: { x: number, y: number },
    onMove: (x: number, y: number) => void
}

export default function Box({
    children,
    color,
    position,
    onMove
} : Props) {
    const [lastCoordinates, setLastCoordinates] = useState<{ x: number, y: number } | null>(null);

    function handlePointerDown(e: React.PointerEvent) {
        const target = e.target as Element;
        if (target.setPointerCapture) {
            target.setPointerCapture(e.pointerId);
        }
        setLastCoordinates({
            x: e.clientX,
            y: e.clientY,
        });
    }

    function handlePointerMove(e : React.PointerEvent) {
        if (lastCoordinates) {
            const dx = e.clientX - lastCoordinates.x;
            const dy = e.clientY - lastCoordinates.y;
            setLastCoordinates({
                x: e.clientX,
                y: e.clientY,
            });
            onMove(dx, dy);
        }
    }

    function handlePointerUp(e : React.PointerEvent) {
        setLastCoordinates(null);
    }

    return (
        <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className='w-24 h-24 cursor-grab absolute border border-black flex justify-center items-center'
            style={{
                backgroundColor: color,
                transform: `translate(${position.x}px, ${position.y}px)`,
            }}
        >
            {children}
        </div>
    );
}
