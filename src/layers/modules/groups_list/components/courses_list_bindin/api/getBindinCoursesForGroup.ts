import { AxiosResponse } from "axios";
import { $api } from "../../../../../../http";
import { ICourseItem } from "../../../../courses_list/types/ICourseItem";
import { ICoursesList } from "../../../../courses_list/types/ICoursesList";

export async function getBindinCoursesForGroup(groupId: number):Promise<AxiosResponse<ICoursesList>> {
  const response = await $api.get(`groups/${groupId}/courses/available`);

  return response
}