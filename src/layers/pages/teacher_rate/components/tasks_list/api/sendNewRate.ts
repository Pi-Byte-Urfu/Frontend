import { AxiosResponse } from "axios";
import { $api } from "../../../../../../http";
import { IStudentNewRate } from "../types/IStudentNewRate";

export async function sendNewRate(pageId: number, userId: number, score: IStudentNewRate):Promise<AxiosResponse> {
  try {
    const response = $api.post(`progress/rate/${pageId}/${userId}`, score);

    return response
  } catch (error: any) {
    return error.response;
  }
}