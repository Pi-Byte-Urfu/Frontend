import { AxiosResponse } from "axios";
import { $api } from "../../../../../../http";
import { IStudentProgress } from "../types/IStudentProgress";

export async function getStudentProgress(studentId: number, courseId: number):Promise<AxiosResponse<IStudentProgress>> {
  try {
    const response = await $api.get(`progress/students/${studentId}/courses/${courseId}`);

    return response;
  } catch (error: any) {
    return error.response;
  }
}