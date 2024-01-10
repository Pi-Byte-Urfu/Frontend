import { redirect, useLocation } from "react-router-dom";
import { IActionProps } from "../../../../../../types/IActionProps";
import { sendNewRate } from "../api/sendNewRate";
import { IStudentNewRate } from "../types/IStudentNewRate";

export async function tasksListAction({ params, request }: IActionProps) {
  const formData = Object.fromEntries(await request.formData()) as any as IStudentNewRate;
  const response = await sendNewRate(+params.pageId, +params.userId, formData);
  if (response.status == 200) {
    return null;
  }

  return redirect('/')
}