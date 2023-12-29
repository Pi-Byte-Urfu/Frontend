import { redirect } from "react-router-dom";
import { IActionProps } from "../../../../types/IActionProps";
import { getCourse } from "../../course_page_editor/api/getCourse";

export async function courseLoader({ params }: IActionProps) {
  const response = await getCourse(params.courseId)
  console.log(response);
  if (response.status == 200) {
    return response.data
  }

  return redirect('/');
}