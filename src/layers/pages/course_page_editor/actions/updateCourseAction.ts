import { IActionProps } from "../../../../types/IActionProps";
import { updateCourse } from "../api/updateCourse";
import { ICourseData } from "../types/ICourseData";

export async function updateCourseAction({request, params}: IActionProps):Promise<ICourseData | null> {
  const updatable = Object.fromEntries(await request.formData()) as any as ICourseData;
  console.log(updatable.description)
  const response = await updateCourse(+params.courseId, updatable);
  if (response.status == 200) {
    return {
      name: updatable.name
    }
  }

  return null;
}