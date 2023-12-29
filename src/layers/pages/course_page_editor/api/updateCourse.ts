import { Axios, AxiosResponse } from "axios";
import { ICourseData } from "../types/ICourseData";
import { $api } from "../../../../http";

export async function updateCourse(courseId: number, update: ICourseData):Promise<AxiosResponse> {
  try {
    const response = $api.patch(`courses/${courseId}`, update);

    return response;
  } catch (error: any) {
    return error.response;
  }
  
}