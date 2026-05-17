import { ApiConfigs, BaseAxios } from "./../index";

export const signup_with_email = async (data: { email: string, password: string,confirmPassword:string, referralCode: string }) => {
    try {
        const { data: newData } = await BaseAxios({
            method: 'POST',
            url: ApiConfigs.signup_with_email,
            data: data
        })
        
        return newData
    } catch (error) {
        console.log(error)

    }
}

