import { IActionProps } from "../../../../types/IActionProps";
import { getCourse } from "../api/getCourse";
import { ICourseData } from "../types/ICourseData";

export async function courseLoader({ params }: IActionProps):Promise<ICourseData> {
  const response = await getCourse(params.courseId);

  return response;
}