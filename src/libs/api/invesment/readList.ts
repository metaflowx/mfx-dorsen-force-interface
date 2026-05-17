import { ApiConfigs, BaseAxios } from "../index";

export interface InvesmentReadListQueryPayload {
    type?: string;
    page?: number;
    limit?: number;
}

export const invesment_read_list = async (params?: InvesmentReadListQueryPayload) => {
    try {
        const { data } = await BaseAxios({
            method: 'GET',
            url: ApiConfigs.invesment_read_list,
            params: params,
        })
        return data
    } catch (error) {
        console.log(error);

    }
}