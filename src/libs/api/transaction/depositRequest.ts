import { ApiConfigs, BaseAxios } from "../index";

interface TxDepositRequestCreatePayload {
  assetId: string;
}

export const tx_deposit_request = async (params: TxDepositRequestCreatePayload) => {
  try {
    const { data: newData } = await BaseAxios({
      method: "POST",
      url: ApiConfigs.tx_deposit_request,
      params: params,
    });

    return newData;
  } catch (error) {
    console.log(error);
  }
};
