import { redirect } from "react-router-dom";
import { IActionProps } from "../../../../types/IActionProps";
import { createModule } from "../api/createModule";
import { IModuleForm } from "../types/IModuleForm";

export async function createModuleAction({request, params}: IActionProps) {
  const formData= Object.fromEntries(await request.formData()) as any;
  formData.courseId = +params.courseId;
  const response = await createModule(formData as IModuleForm);
  console.log(response)
  return redirect(`/courseEditor/${params.courseId}`)
}