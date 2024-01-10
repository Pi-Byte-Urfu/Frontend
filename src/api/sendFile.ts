import { AxiosResponse } from "axios";
import { $api } from "../http";

export async function sendFile(formData: FormData, targetPath: string): Promise<AxiosResponse>{
  try {
    const response = $api.post(targetPath, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    return response;
  } catch (error: any) {
    return error.response;
  }
}