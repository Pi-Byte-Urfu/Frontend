import { AxiosError, AxiosResponse } from "axios";
import { $api } from "../../../../http";
import { UserType } from "../../../../types/userType";
import { ILoginData } from "../types/ILoginData";

export interface ILoginResponse {
  id: number,
  userType: UserType
}
export async function login(data: ILoginData) {
    const response = await $api.post<ILoginResponse>('/users/login', JSON.stringify(data))
    return response;
}