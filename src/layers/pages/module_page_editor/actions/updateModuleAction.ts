import { redirect } from "react-router-dom";
import { IActionProps } from "../../../../types/IActionProps";
import { updateModule } from "../api/updateModule";
import { IModuleData } from "../types/IModuleData";

export async function updateModuleAction({request, params}:IActionProps) {
  const formData = Object.fromEntries(await request.formData()) as any as IModuleData;
  const response = await updateModule(+params.moduleId, formData);
  if (response.status == 200) {
    return {name: formData.name};
  }

  return redirect('/')
}