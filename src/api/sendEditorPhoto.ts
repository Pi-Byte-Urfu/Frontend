import { AxiosResponse } from "axios";
import { $api } from "../http";

interface sendEditorPhotoResponse {
  urlToGet: string
}

export async function sendEditorPhoto(formData: FormData):Promise<AxiosResponse<sendEditorPhotoResponse>> {
  const response = $api.post<sendEditorPhotoResponse>(`editor/photos`, formData, {
    headers: {
      "Content-Type": 'multipart/form-data'
    }
  });

  return response;
}