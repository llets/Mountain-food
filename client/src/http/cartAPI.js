import {$authHost} from "./index";

export const createCartItem = async (userId, foodId, amount) => {
    const {data} = await $authHost.post('api/cartItem', {userId, foodId, amount})
    return data
}
export const fetchCart = async (id) => {
    if (id !== undefined) {
        const {data} = await $authHost.get('api/cart/' + id)
        return data
    } else{
        return []
    }
}

export const deleteCartItem = async (itemId) => {
    const {data} = await $authHost.delete('api/cartItem/' + itemId)
    return data
}

export const changeAmount = async (id, type) =>{
    const {data} = await $authHost.put('api/cartItem/', {id, type})
    return data
}