import { IActionProps } from "../../../../types/IActionProps";
import { getModulesList } from "../api/getModulesList";
import { IModulesListData } from "../types/IModulesListData";

export async function modulesListLoader({params}: IActionProps):Promise<IModulesListData> {
  const response = await getModulesList(params.courseId);
  
  return response;
}