import { ApiConfigs, BaseAxios } from "./../index";

export const profile_me = async () => {
    try {
        const { data } = await BaseAxios({
            method: 'GET',
            url: ApiConfigs.profile_me
        })
        return data
    } catch (error) {
        console.log(error);
        
    }
}