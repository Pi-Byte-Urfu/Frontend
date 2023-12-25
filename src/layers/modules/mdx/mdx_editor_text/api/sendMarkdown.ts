import axios from "axios";
import { IMDXPhotoResponse } from "../../types/IMDXPhotoResponse";

export async function sendMarkdown(markdown: string) {
  return 1;
}

export async function sendPhoto(formData: FormData){
  try {
    const response = await axios.post<IMDXPhotoResponse>('каккой-то адрес', formData)

    return response.data;
  } catch (error) {
    console.log(error)
  }
}