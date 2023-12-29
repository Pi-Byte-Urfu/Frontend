import { AxiosResponse } from "axios";
import { $api } from "../../../../http";
import { ICourseData } from "../types/ICourseData";

export async function getCourse(courseId: number):Promise<AxiosResponse<ICourseData>> {
  try {
    const response = $api.get<ICourseData>(`courses/${courseId}`);

    return response
  } catch (error: any) {
    return error.response
  }
}