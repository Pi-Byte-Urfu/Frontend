import { AxiosResponse } from "axios";
import { $api } from "../../../../http";
import { ICourseCreateResponse } from "../types/ICourseCreateResponse";

export async function createCourse(creatorId: number):Promise<AxiosResponse<ICourseCreateResponse>> {
  try {
    const response = await $api.post<ICourseCreateResponse>(`courses`, JSON.stringify( {
      name: '',
      description: '',
      creatorId: creatorId,
    }))

    return response;
  } catch (error: any) {
    return error.response;
  }
}