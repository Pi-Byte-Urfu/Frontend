import { redirect } from "react-router-dom";
import { store } from "../../../../../..";
import { UserType } from "../../../../../../types/userType";
import { getGroupsList } from "../api/getGroupsList";
import { IActionProps } from "../../../../../../types/IActionProps";


export async function groupsListLoader({ params }: IActionProps) {
  const response = await getGroupsList(params.teacherId);
  if (response.status == 200) {
   return response.data; 
  }
  
  return redirect('/')
}