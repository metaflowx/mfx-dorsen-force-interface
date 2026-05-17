import { ApiConfigs, BaseAxios } from "../index";


export const referral_read_downline = async (params:{ userId: string}) => {
    try {
        const { data } = await BaseAxios({
            method: 'GET',
            url: ApiConfigs.referral_read_downline,
            params: params
        })
        return data
    } catch (error) {
        console.log(error);

    }
}