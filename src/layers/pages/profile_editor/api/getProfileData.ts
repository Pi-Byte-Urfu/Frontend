import { $api } from "../../../../http";
import { IProfileDataResponse } from "../types/IProfileDataResponse";

export async function getProfileData() {
  try {
    const response = $api.get<IProfileDataResponse>('./')

    return (await response);    
  } catch(e: any) {
    return e.response;
  }
}