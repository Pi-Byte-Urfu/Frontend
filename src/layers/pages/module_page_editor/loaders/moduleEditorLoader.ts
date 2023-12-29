import { redirect } from "react-router-dom";
import { IActionProps } from "../../../../types/IActionProps";
import { getModule } from "../api/getModule";
import { IModuleData } from "../types/IModuleData";

export async function moduleEditorLoader({params}: IActionProps) {
  const response = await getModule(params.moduleId);
  if (response.status == 200) {
    return response.data;
  }

  return redirect('/');
}