import {$authHost, $host} from "./index";

export const createFood = async (food) => {
    const {data} = await $authHost.post('api/food', {food})
    return data
}
export const fetchFood = async () => {
    const {data} = await $host.get('api/food')
    return data
}
export const deleteFood = async (id) => {
    const {data} = await $authHost.delete('api/food/' + id)
    return data
}