import { AxiosResponse } from "axios";
import { IStudentTasksList } from "../types/IStudentTasksList";
import { $api } from "../../../../../../http";

export async function getStudentsTasks(courseId: number, userId: number):Promise<AxiosResponse<IStudentTasksList>> {
  try {
    const response = await $api.get(`progress/courses/${courseId}/students/${userId}/tasks`);

    return response;
  } catch (error: any) {
    return error.response;
  }
}