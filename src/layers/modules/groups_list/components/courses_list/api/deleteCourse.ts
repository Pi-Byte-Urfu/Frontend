import { AxiosResponse } from "axios";
import { $api } from "../../../../../../http";

export async function deleteCourse(groupId: number, courseId: number):Promise<AxiosResponse> {
  try {
    const response = await $api.delete(`groups/${groupId}/courses/${courseId}`)

    return response;
  } catch (error: any) {
    return error.response
  }
}