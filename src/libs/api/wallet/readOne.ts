import { ApiConfigs, BaseAxios } from "../index";


export const wallet_read_one = async () => {
    try {
        const { data } = await BaseAxios({
            method: 'GET',
            url: ApiConfigs.wallet_read_one,
        })
        return data
    } catch (error) {
        console.log(error);

    }
}