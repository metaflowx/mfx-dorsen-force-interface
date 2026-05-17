import { ApiConfigs, BaseAxios } from "../index";


export const admin_dashboard_read_portfolio = async () => {
    try {
        const { data } = await BaseAxios({
            method: 'GET',
            url: ApiConfigs.admin_dashboard_read_portfolio
        })
        return data
    } catch (error) {
        console.log(error);

    }
}