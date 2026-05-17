import { ApiConfigs, BaseAxios } from "../index";

interface InvesmentRedeemCreatePayload {
  amount: string;
}

export const invesment_redeem = async (data: InvesmentRedeemCreatePayload) => {
  try {
    const { data: newData } = await BaseAxios({
      method: "POST",
      url: ApiConfigs.invesment_redeem,
      data,
    });

    return newData;
  } catch (error) {
    console.log(error);
  }
};
