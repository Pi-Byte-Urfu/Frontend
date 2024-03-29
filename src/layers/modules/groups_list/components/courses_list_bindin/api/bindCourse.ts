import { AxiosResponse } from "axios";
import { $api } from "../../../../../../http";

export async function bindCourse(coursesId: number[], groupId: number): Promise<AxiosResponse> {
  const data = {
    courses: coursesId.map(id => {
      return {
        courseId: id
      }
    })
  };

  const response = await $api.post(`groups/${groupId}/courses/many`, data);

  return response;
}