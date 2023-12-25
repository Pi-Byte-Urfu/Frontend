import { IActionProps } from "../../../../types/IActionProps";
import { updateProfileData } from "../api/updateProfileData";

export async function profileEditPasswordAction({request}: IActionProps) {
  const formData = Object.fromEntries(await request.formData()) as any;
  console.log(formData);
  if (formData.confirmPassword != formData.newPassword) {
    return 'Пароли не совпадают';
  }
  delete formData['confirmPassword'];

  const response = await updateProfileData(formData);
  if (response.status == 200) {
    return 'Пароль успешно изменён'
  }

  return response.data.error_message;
}