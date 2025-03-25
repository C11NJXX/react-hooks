import { useActionState } from "react"

async function increment(prevState: number, formData: FormData) {
    return prevState + 1;
}

export default function StatefulForm() {
    // useActionState(action, initialState, permalink?)
    const [state, formAction] = useActionState(increment, 0);
    return (
        <>
            <form className="flex flex-col items-center">
                <span className="p-3 text-pink-500 text-3xl font-bold">{state}</span>
                <button formAction={formAction} className="bg-pink-300 text-pink-500 font-bold p-5 rounded-lg hover:bg-purple-200 active:bg-red-200 transition duration-200">Click me to plus one</button>
            </form>
        </>
    )
}
