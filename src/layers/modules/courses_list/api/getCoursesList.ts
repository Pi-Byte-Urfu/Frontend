import { AxiosResponse } from "axios";
import { ICoursesList } from "../types/ICoursesList";
import { $api } from "../../../../http";
import { ICourseItem } from "../types/ICourseItem";

export async function getCoursesList():Promise<ICourseItem[]> {
  try {
    const response = await $api.get<ICoursesList>(`courses/users`);

    return response.data.courseList;
  } catch (error: any) {
    return error.response;
  }
}