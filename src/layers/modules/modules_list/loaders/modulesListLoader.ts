import { IActionProps } from "../../../../types/IActionProps";
import { getModulesList } from "../api/getModulesList";
import { IModulesListData } from "../types/IModulesListData";

export async function modulesListLoader({params}: IActionProps):Promise<IModulesListData | null> {
  const response = await getModulesList(params.courseId);

  if (response.status == 200) {
    return response.data
  }

  return null;
}