import { redirect } from "react-router-dom";
import { IActionProps } from "../../../../types/IActionProps";

export async function createStepAction({request, params}: IActionProps) {
  const formData = Object.fromEntries(await request.formData());
  // Отправка на сервер
  return redirect(`/courseEditor/${params.courseId}/module/${params.moduleId}`)
}