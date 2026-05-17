import { ApiConfigs, BaseAxios } from "../index";

export interface AssetCreatePayload {
  chainId: number;
  assetAddress: string;
  assetType: string;
  coinGeckoId: string;
  name: string;
  symbol: string;
  depositEnabled: boolean;
  withdrawalEnabled: boolean;
  withdrawalFee?: number;
  minWithdrawalAmount: number;
  maxWithdrawalAmount: number;
}

export const asset_create = async (data: AssetCreatePayload) => {
  try {
    const { data: newData } = await BaseAxios({
      method: "POST",
      url: ApiConfigs.asset_create,
      data,
    });

    return newData;
  } catch (error) {
    console.log(error);
  }
};
