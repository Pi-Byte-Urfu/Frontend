import { store } from "../../../../../..";
import { IActionProps } from "../../../../../../types/IActionProps";
import { getStudentProgress } from "../api/getStudentProgress";

export async function studentProgressLoader({ params }: IActionProps) {
  const response = await getStudentProgress(+params.userId, +params.courseId);
  if (response.status == 200) {
    return response.data.progress;
  }

  return null;
}