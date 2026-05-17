import { ApiConfigs, BaseAxios } from "..";
import { AssetCreatePayload } from "./create";

export const asset_modify = async (payload: { id: string,data: AssetCreatePayload }) => {
    try {
        const { data: newData } = await BaseAxios({
            method: "PUT",
            url: ApiConfigs.asset_modify,
            params: { id: payload.id },
            data: payload.data,
        });

        return newData;
    } catch (error) {
        console.log(error);
    }
};