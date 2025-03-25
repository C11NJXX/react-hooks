export default async function addToCart(prevState:any, formData:FormData) {
    const itemId = formData.get('itemId') as string;
    if(itemId === '1') {
        return '已加入购物车'
    }else {
        await new Promise<void>(resolve => {
            setTimeout(resolve,1000)
        })
        return '抱歉，购物车已满'
    }
}