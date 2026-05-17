import { ApiConfigs, BaseAxios } from "../index";

export interface ReferralStatsQueryPayload {
    fromDate?: string;
    toDate?: string;
}

export const referral_read_stats = async (params?: ReferralStatsQueryPayload) => {
    try {
        const { data } = await BaseAxios({
            method: 'GET',
            url: ApiConfigs.referral_read_stats,
            params: params,

        })
        return data
    } catch (error) {
        console.log(error);

    }
}