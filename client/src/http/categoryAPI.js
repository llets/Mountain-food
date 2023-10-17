import {$host} from "./index";

export const fetchCategory = async () => {
    const {data} = await $host.get('api/category')
    return data
}