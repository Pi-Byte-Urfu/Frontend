import { IActionProps } from "../../../../types/IActionProps";
import { getCourse } from "../api/getCourse";
import { ICourseData } from "../types/ICourseData";


export async function courseEditorLoader({params}: IActionProps):Promise<ICourseData | null> {
  const response = await getCourse(params.courseId);

  if (response.status == 200) {
    return response.data;
  }

  return null;
}