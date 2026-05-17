import { ApiConfigs, BaseAxios } from "../index";

export interface TxReadOneQueryPayload {
    txId?: string
}

export const tx_read_one = async (params?: TxReadOneQueryPayload) => {
    try {
        const { data } = await BaseAxios({
            method: 'GET',
            url: ApiConfigs.tx_read_one,
            params: params,
        })
        return data
    } catch (error) {
        console.log(error);

    }
}