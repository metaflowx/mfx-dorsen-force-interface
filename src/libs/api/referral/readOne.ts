import { ApiConfigs, BaseAxios } from "../index";


export const referral_read_one = async () => {
    try {
        const { data } = await BaseAxios({
            method: 'GET',
            url: ApiConfigs.referral_read_one
        })
        return data
    } catch (error) {
        console.log(error);

    }
}