import { IActionProps } from "../../../../types/IActionProps";
import { updateTheory } from "../components/thoery_editor/api/updateTheory";
import { ITheoryData } from "../types/ITheoryData";

export async function updateTheoryAction({request, params}: IActionProps) {
  const formData = Object.fromEntries(await request.formData()) as any as ITheoryData;
  console.log(formData)
  const response = await updateTheory(+params.stepId, formData);
  if (response.status == 200) {
    return {
      name: formData.name
    }
  }

  return null;
}