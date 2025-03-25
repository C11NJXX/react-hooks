import StatefulForm from './components/StatefulForm'
import AddToCartForm from './components/AddToCartForm'
import AddToCartForm2 from './components/AddToCartForm2'
export default function UseActionState() {
    return (
        <>
            <div className="h-full bg-pink-200 flex flex-col items-center px-10">
                <h1 className="text-red-700 text-6xl font-bold my-8">useActionState</h1>
                <section className='flex flex-col items-center border-pink-300 border-2 rounded-2xl py-3 max-w-2/3'>
                    <p className="text-pink-700 text-2xl font-bold mt-8 mb-8">useActionState(action, initialState, permalink?)</p>
                    <p className='text-pink-700 text-2xl font-bold mt-4 mb-8 px-5'>在组件的顶层调用 <span className='italic'>useActionState</span> 即可创建一个随 <span className='font-bold text-3xl text-pink-600'>表单动作被调用</span> 而更新的 state。在调用 useActionState 时在参数中传入现有的表单动作函数以及一个初始状态，无论 Action 是否在 pending 中，它都会返回一个新的 action 函数和一个 form state 以供在 form 中使用。这个新的 form state 也会作为参数传入提供的表单动作函数。</p>
                    <StatefulForm />
                </section>

            </div>
            <div className="h-full bg-blue-200 flex flex-col items-center px-10">
                <section className='flex flex-col items-center border-blue-300 border-2 rounded-2xl py-3 max-w-2/3'>
                    <p className='text-blue-700 text-3xl font-bold my-8'>第 1 个示例 共 2 个挑战: 展示表单错误 </p>
                    <p className='text-blue-700 text-2xl font-bold mt-4 mb-8 px-5'>将action包裹进useActionState即可展示诸如错误信息或服务器函数返回的toast等信息。</p>
                    <AddToCartForm itemId={1} itemTitle='JavaScript : 权威指南'/>
                    <AddToCartForm itemId={2} itemTitle='JavaScript : 优点荟萃'/>
                </section>
            </div>
            <div className="h-full bg-green-200 flex flex-col items-center px-10">
                <section className='flex flex-col items-center border-green-300 border-2 rounded-2xl py-3 max-w-2/3'>
                    <p className='text-green-700 text-3xl font-bold my-8'>第 2 个示例 共 2 个挑战: 提交表单后展示结构性数据 </p>
                    <p className='text-green-700 text-2xl font-bold mt-4 mb-8 px-5'>服务器函数的返回值可以为任意可序列化的值。例如，可以返回一个实例，该实例携带一个 boolean 类型的属性表示操作是否成功，同时附带错误信息或更新消息。</p>
                    <AddToCartForm2 itemID={'1'} itemTitle='JavaScript : 权威指南'/>
                    <AddToCartForm2 itemID={'2'} itemTitle='JavaScript : 优点荟萃'/>
                </section>
            </div>
        </>
    )
}
