import { ApiConfigs, BaseAxios } from "..";

export const asset_remove = async (params: { id: string }) => {
    try {
        const { data: newData } = await BaseAxios({
            method: "DELETE",
            url: ApiConfigs.asset_remove,
            params,
        });

        return newData;
    } catch (error) {
        console.log(error);
    }
};