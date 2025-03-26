export default function Background({
    position
}: { position: { x: number, y: number } }) {
    return (
        <div className={`absolute w-full h-full bg-yellow-100 bg-opacity-20 translate-x-${position.x} translate-y-${position.y}`}/>
    );
};
