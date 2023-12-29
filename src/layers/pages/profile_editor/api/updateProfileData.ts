import { $api } from "../../../../http";
import { IProfileDataMain } from "../types/IProfileDataResponse";

export async function updateProfileData(formData: IProfileDataMain) {
  try {
  const response = $api.patch('accounts/user', formData)

  return response;   
  } catch(e: any) {
    return e.response
  }
}