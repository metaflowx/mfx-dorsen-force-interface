import { ApiConfigs, BaseAxios } from "../index";


export const referral_read_upline = async () => {
    try {
        const { data } = await BaseAxios({
            method: 'GET',
            url: ApiConfigs.referral_read_upline,

        })
        return data
    } catch (error) {
        console.log(error);

    }
}