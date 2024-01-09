import { redirect } from "react-router-dom";
import { IActionProps } from "../../../../../../types/IActionProps";
import { getTask } from "../api/getTask";

export async function taskLoader({ params }: IActionProps) {
  const response = await getTask(+params.stepId);

  if (response.status == 200) {
    return response.data;
  }

  return redirect('/');
}