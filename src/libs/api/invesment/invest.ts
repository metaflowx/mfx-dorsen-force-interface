import { ApiConfigs, BaseAxios } from "../index";

interface InvesmentInvestCreatePayload {
  amount: string;
}

export const invesment_invest = async (data: InvesmentInvestCreatePayload) => {
  try {
    const { data: newData } = await BaseAxios({
      method: "POST",
      url: ApiConfigs.invesment_invest,
      data,
    });

    return newData;
  } catch (error) {
    console.log(error);
  }
};
