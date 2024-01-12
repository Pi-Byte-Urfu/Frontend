import { IActionProps } from "../../../../types/IActionProps";
import { IModuleItem } from "../../../components/module_item/types/IModuleItem";
import { getModulesList } from "../api/getModulesList";
import { IModulesListData } from "../types/IModulesListData";

export async function modulesListLoader({params}: IActionProps):Promise<IModuleItem[] | null> {
  const response = await getModulesList(params.courseId);

  if (response.status == 200) {
    return response.data.courseChapters;
  }

  return null;
}