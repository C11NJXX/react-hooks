import { useActionState } from "react"
import addToCart from '../utils/action.ts'

export default function AddToCartForm({ itemId, itemTitle }: { itemId: number, itemTitle: string }) {

    const [message, formAction, isPending] = useActionState(addToCart, undefined);
    return (
        <>
            <form action={formAction} className="p-10 bg-blue-300 mb-5 rounded-2xl flex flex-col items-center gap-y-3">
                <h2 className="text-blue-600 text-2xl font-bold">{itemTitle}</h2>
                <input type="hidden" name="itemId" value={itemId} />
                <button type="submit" className="bg-blue-200 block p-5 rounded-2xl text-blue-600">{isPending ? '加入中...' : '加入购物车'}</button>
                <span className="text-blue-800 text-2xl">{isPending ? '请等待...' : message || ''}</span>
            </form>
        </>
    )
}