import { ApiConfigs, BaseAxios } from "../index";

interface TxWithdrawCreatePayload {
  assetId: string;
  withdrawalAddress: string;
  withdrawalAmount: string;
  password: string;
}

export const tx_withdraw = async (data: TxWithdrawCreatePayload) => {
  try {
    const { data: newData } = await BaseAxios({
      method: "POST",
      url: ApiConfigs.tx_withdraw,
      data,
    });

    return newData;
  } catch (error) {
    console.log(error);
  }
};
