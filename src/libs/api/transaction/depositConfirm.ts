import { ApiConfigs, BaseAxios } from "../index";

interface TxDepositConfirmedCreatePayload {
  txId: string;
}

export const tx_deposit_confirmed = async (params: TxDepositConfirmedCreatePayload) => {
  try {
    const { data: newData } = await BaseAxios({
      method: "POST",
      url: ApiConfigs.tx_deposit_confirmed,
      params: params,
    });

    return newData;
  } catch (error) {
    console.log(error);
  }
};
