import { AxiosError, AxiosResponse } from "axios";
import { $api } from "../../../../../../http";
import { ICoursesListForGroup } from "../types/ICoursesListForGroup";

export async function getCoursesForGroup(groupId: number):Promise<AxiosResponse<ICoursesListForGroup>> {
  try {
    const response = await $api.get<ICoursesListForGroup>(`groups/${groupId}/courses`);
    return response;
  } catch (error: any) {
    return error.response;
  }
}