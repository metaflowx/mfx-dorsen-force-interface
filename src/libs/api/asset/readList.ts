import { ApiConfigs, BaseAxios } from "../index";

export interface AssetReadListQueryPayload {
    depositEnabled?: boolean;
    withdrawalEnabled?: boolean;
}

export const asset_read_list = async (params?:AssetReadListQueryPayload) => {
    try {
        const { data } = await BaseAxios({
            method: 'GET',
            url: ApiConfigs.asset_read_list,
            params: params,
        })
        return data
    } catch (error) {
        console.log(error);

    }
}