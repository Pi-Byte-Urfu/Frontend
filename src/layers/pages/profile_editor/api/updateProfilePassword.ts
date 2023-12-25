import { AxiosError, AxiosResponse } from "axios";
import { $api } from "../../../../http";
import { IProfilePasswordData } from "../types/IProfilePasswordData";

export async function updateProfilePassword(formData: IProfilePasswordData) {
  try {
    //const response = $api.post('./', JSON.stringify(formData));
    
    return {
      status: 200
    }
  } catch (error: any) {
    return error.response
  }
}