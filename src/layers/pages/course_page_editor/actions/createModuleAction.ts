import { redirect } from "react-router-dom";
import { IActionProps } from "../../../../types/IActionProps";

export async function createModuleAction({request, params}: IActionProps) {
  const formData= Object.fromEntries(await request.formData())
  // запрос на сервер

  return redirect(`/courseEditor/${params.courseid}`)
}