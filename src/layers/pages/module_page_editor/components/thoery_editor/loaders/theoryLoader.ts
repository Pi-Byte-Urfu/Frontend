import { redirect } from "react-router-dom";
import { IActionProps } from "../../../../../../types/IActionProps";
import { getTheory } from "../api/getTheory";

export async function theoryLoader({params}: IActionProps) {
  const response = await getTheory(params.stepId);
  console.log(response)
  if (response.status == 200) {
    return response.data;
  }

  return redirect('/')
}