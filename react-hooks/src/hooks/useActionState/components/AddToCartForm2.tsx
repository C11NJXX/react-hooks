import { useActionState, useState } from "react";
import { addToCart } from "../utils/action2";

interface Props {
    itemID: string,
    itemTitle: string
}

export default function AddToCartForm2({ itemID, itemTitle }: Props) {
    const [formState, formAction] = useActionState(addToCart, undefined);
    return (
        <form action={formAction} className="p-10 bg-green-300 mb-5 rounded-2xl flex flex-col items-center gap-y-3">
            <h2 className="text-green-600 text-2xl font-bold">{itemTitle}</h2>
            <input type="hidden" name="itemID" value={itemID} />
            <button type="submit" className="bg-green-200 block p-5 rounded-2xl text-green-600">加入购物车</button>
            {formState?.success &&
                <div className="toast text-green-600 text-2xl font-bold">
                    成功加入购物车！当前购物车中共有 {formState.cartSize} 件商品。
                </div>
            }
            {formState?.success === false &&
                <div className="error text-green-600 text-2xl font-bold">
                    加入购物车失败：{formState.message}
                </div>
            }
        </form>
    );
}