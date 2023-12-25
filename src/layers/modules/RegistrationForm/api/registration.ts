import axios, { AxiosError } from "axios";
import { $api, $api2 } from "../../../../http";
import { IUser } from "../../../../types/IUser";
import { UserType } from "../../../../types/userType";
import { IRegistrationData } from "../types/IRegistrationData";

interface IRegistrationResponse {
  id: number,
  userType: UserType
}

export async function registration(data: IRegistrationData) {
  try{
    const response = await $api.post<IRegistrationResponse>('/users/register', JSON.stringify(data))
    console.log(response)
    return response;

  } catch(e: any) {
    return e.response
  }
}