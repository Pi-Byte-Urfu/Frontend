import { IActionProps } from "../../../../types/IActionProps";
import { updateProfileData } from "../api/updateProfileData";
import { IProfileDataMain } from "../types/IProfileDataResponse";

export async function profileEditDataAction({request}: IActionProps) {
  const formData = Object.fromEntries(await request.formData()) as any as IProfileDataMain
  const response = await updateProfileData(formData);
  if (response.status == 200) {
    return response.data;
  }
}