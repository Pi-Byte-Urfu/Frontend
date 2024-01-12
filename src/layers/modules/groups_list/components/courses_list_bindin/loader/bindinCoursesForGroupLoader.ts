import { IActionProps } from "../../../../../../types/IActionProps";
import { getBindinCoursesForGroup } from "../api/getBindinCoursesForGroup";

export async function bindinCoursesForGroupLoader({params}: IActionProps) {
  const response = await getBindinCoursesForGroup(+params.groupId);
  if (response.status == 200) {
    return response.data.courseList;
  }

  return response;
}