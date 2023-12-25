import { AxiosError } from "axios";
import { $api } from "../../../../http";

export async function sendPhoto(formData: FormData, targetPath: string) {
  try {
    const response = $api.post(targetPath, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response;
  } catch(error:any) {
    return error.response;
  }
}