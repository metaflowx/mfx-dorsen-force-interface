import { ApiConfigs, BaseAxios } from "../index";

export interface TxReadListQueryPayload {
    txType?: string;
    txStatus?: string;
    settlementStatus?: string;
    page?: string;
    limit?: string;
    sortBy?: string;
    sortOrder?: string;

}

export const tx_read_list = async (params?: TxReadListQueryPayload) => {
    try {
        const { data } = await BaseAxios({
            method: 'GET',
            url: ApiConfigs.tx_read_list,
            params: params,
        })
        return data
    } catch (error) {
        console.log(error);

    }
}