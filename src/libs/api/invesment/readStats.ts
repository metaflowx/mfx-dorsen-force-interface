import { ApiConfigs, BaseAxios } from "../index";


export const invesment_read_stats = async () => {
    try {
        const { data } = await BaseAxios({
            method: 'GET',
            url: ApiConfigs.invesment_read_stats
        })
        return data
    } catch (error) {
        console.log(error);

    }
}