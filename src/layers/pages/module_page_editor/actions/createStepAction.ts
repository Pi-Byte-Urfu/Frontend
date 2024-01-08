import { redirect } from "react-router-dom";
import { IActionProps } from "../../../../types/IActionProps";
import { IStepForm } from "../types/IStep";
import { createStep } from "../api/createStep";

export async function createStepAction({request, params}: IActionProps) {
  const formData = Object.fromEntries(await request.formData()) as any;
  formData.chapterId = +params.moduleId;
  formData.pageType = +formData.pageType
  console.log(formData)
  const resposne = await createStep(formData as IStepForm);
  if (resposne.status == 200) {
    return redirect(`/courseEditor/${params.courseId}/module/${params.moduleId}/step/${formData.pageType}/${resposne.data.id}`)
  }
 
  return redirect('/')
}