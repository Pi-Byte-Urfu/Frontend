import { redirect } from "react-router-dom";
import { IActionProps } from "../../../../../../types/IActionProps";
import { getGroupInfo } from "../api/getGroupInfo";

export async function groupInfoLoader({params}: IActionProps) {
  const response = await getGroupInfo(+params.groupId);

  if (response.status == 200) {
    return response.data.students;
  }

  return redirect('/');
}