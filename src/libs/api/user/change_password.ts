import { ApiConfigs, BaseAxios } from "../index";

export const change_password = async (data: { oldPassword: string,newPassword:string,confirmNewPassword:string }) => {
    try {
        const { data: newData } = await BaseAxios({
            method: 'PUT',
            url: ApiConfigs.change_password,
            data: data
        })
        return newData
    } catch (error) {
        console.log(error)

    }
}

