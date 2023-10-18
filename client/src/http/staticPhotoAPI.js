import {$host} from "./index";

export const fetchStaticPhotos = async () => {
    const {data} = await $host.get('api/staticPhoto')
    console.log(data)
    return data
}