import { Axios, AxiosResponse } from "axios";
import { $api } from "../../../../http";
import { IProfileDataResponse } from "../types/IProfileDataResponse";

export async function getProfileData():Promise<AxiosResponse<IProfileDataResponse>> {
  try {
    const response = await $api.get<IProfileDataResponse>('/accounts/user')

    return response;    
  } catch(e: any) {
    console.log(e)
    return e.response;
  }
}