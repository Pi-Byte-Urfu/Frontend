import { redirect } from "react-router-dom";
import { IActionProps } from "../../../../types/IActionProps";
import { registration } from "../api/registration";
import { useContext } from "react";
import { AuthContext, store } from "../../../..";
import { IRegistrationData } from "../types/IRegistrationData";
import { UserType } from "../../../../types/userType";

export async function registrationAction({ request }:IActionProps) {
  const registrationData = Object.fromEntries(await request.formData() as any) as IRegistrationData;
  registrationData.userType = +registrationData.userType;
  const response = await registration(registrationData)
  if (response.status == 200) {
    store.login(response.data.id, response.data.userType);
    return redirect('/')
  }
  console.log(response)
  return response.status > 500 ? 'Ошибка сервера' : response.data.error_message;
}