import { AxiosResponse } from "axios";
import { IProgress } from "../types/IProgress";
import { $api } from "../../../../../../http";

export async function getProgress(userId: number, courseId: number):Promise<AxiosResponse<IProgress>> {
  try {
    const response = $api.get(`progress/students/${userId}/courses/${courseId}`);

    return response;
  } catch (error: any) {
    return error.response;
  }
}