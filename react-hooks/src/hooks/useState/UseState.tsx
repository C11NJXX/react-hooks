import Counter from "./components/Counter"
import MovingDot from "./components/MovingDot"
import Canvas from "./components/Canvas/Canvas"
export default function UseState() {
    return (
        <>
            <div className="h-full bg-pink-200 flex flex-col items-center px-10">
                <h2 className="text-red-700 text-6xl font-bold my-8">useState</h2>
                <div className="flex flex-col items-center border-4 border-blue-500 p-4 rounded-2xl">
                    <p className="text-blue-500 text-3xl font-bold my-8">根据先前的 state 更新 state</p>
                    <Counter />
                </div>
                <div className="flex flex-col items-center border-4 border-green-500 p-4 rounded-2xl mt-8">
                    <p className="text-green-500 text-3xl font-bold my-8">更新 state 中的对象</p>
                    <p className="text-green-500 text-xl my-2">将 state 视为只读的</p>
                    <p className="text-green-500 text-xl my-2">为了真正地触发一次重新渲染，你需要创建一个新对象并把它传递给 state 的设置函数</p>
                    <MovingDot />
                </div>
                <div className="flex flex-col items-center border-4 border-purple-500 p-4 rounded-2xl mt-8">
                    <p className="text-purple-500 text-3xl font-bold my-8">使用 Immer 更新对象(数组同理)</p>
                    <Canvas />
                </div>
            </div>
        </>
    )
}
