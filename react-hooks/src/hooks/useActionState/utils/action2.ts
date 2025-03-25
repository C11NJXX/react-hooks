export async function addToCart(prevState: any, queryData: FormData) {
    const itemID = queryData.get('itemID');
    if (itemID === "1") {
        return {
            success: true,
            cartSize: 12,
        };
    } else {
        return {
            success: false,
            message: "商品已售罄",
        };
    }
}
