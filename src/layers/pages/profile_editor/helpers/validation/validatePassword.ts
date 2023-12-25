import { IValidateResponse } from "../../../../ui/input/IValidateResponse";

export function validatePassword(password: string): IValidateResponse {
  const isValidate = password.length >= 8;

  return {
    isValidate: isValidate,
    message: isValidate ? null : 'Минимальная длина пароля 8 символов'
  }
}