import { redirect } from "react-router-dom";
import { IActionProps } from "../../../../types/IActionProps";
import { login } from "../api/login";
import { ILoginData } from "../types/ILoginData";
import { store } from "../../../..";

export async function loginAction({request}:IActionProps) {
  console.log('action')
  const loginData = Object.fromEntries(await request.formData() as any) as ILoginData;
  const response = await login(loginData);

  if (response.status == 200) {
    store.login(response.data.id, response.data.userType);
    return redirect('/')
  }
  
  return response.status > 500 ? 'Ошибка сервера' : response.data.error_message;
}