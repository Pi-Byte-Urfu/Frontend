import { redirect } from "react-router-dom";
import { IActionProps } from "../../../../../../types/IActionProps";
import { updateTest } from "../api/updateTest";
import { ITestUpdateData } from "../types/ITestUpdateData";

export async function updateTestAction({params, request}: IActionProps) {
  const formData = Object.fromEntries(await request.formData()) as any as ITestUpdateData;
  const response = await updateTest(+params.stepId, formData);
  if (response.status == 200) {
    return formData.name;
  }

  return redirect('/');
}