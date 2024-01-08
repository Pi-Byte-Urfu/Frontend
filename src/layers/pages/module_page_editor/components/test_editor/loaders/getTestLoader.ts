import { redirect } from "react-router-dom";
import { IActionProps } from "../../../../../../types/IActionProps";
import { getTest } from "../api/getTest";

export async function getTestLoader({ params }: IActionProps) {
  const response = await getTest(+params.stepId);
  if (response.status == 200) {
    return response.data;
  }

  return redirect('/');
}