import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    function badSetCount() {
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
    }
    function goodSetCount() {
        setCount(count => count + 1)
        setCount(count => count + 1)
        setCount(count => count + 1)
    }
    return (
        <>
            <span className="text-4xl text-blue-700 font-bold">{count}</span>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
                onClick={badSetCount}
            >
                setCount(count + 1) * 3
            </button>
            <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2"
                onClick={goodSetCount}
            >
                setCount(count =&gt; count + 1) * 3
            </button>
        </>
    )
}
