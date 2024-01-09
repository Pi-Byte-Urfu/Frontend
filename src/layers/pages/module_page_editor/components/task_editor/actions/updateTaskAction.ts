import { IActionProps } from "../../../../../../types/IActionProps";
import { updateTask } from "../api/updateTask";
import { ITaskData } from "../types/ITaskData";

export async function updateTaskAction({ request, params}: IActionProps) {
  const formData = Object.fromEntries(await request.formData()) as any as ITaskData;
  console.log(formData);
  const response = await updateTask(+params.stepId, formData);
  if (response.status == 200) {
    return {
      name: formData.name,
      maxScore: formData.maxScore
    }
  }

  return null;
}