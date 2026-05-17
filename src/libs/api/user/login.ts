import { ApiConfigs, BaseAxios } from "./../index";

export const login_with_email = async (data: { email: string, password: string }) => {
    try {
        const { data: newData } = await BaseAxios({
            method: 'POST',
            url: ApiConfigs.login_with_email,
            data: data,
        })
        return newData
    } catch (error) {
        console.log(error)

    }
}

