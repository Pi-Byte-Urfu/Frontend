import { IValidateResponse } from "../../../../ui/input/IValidateResponse";

export function validateEmail(email: string): IValidateResponse {
  const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
  const isValidate = pattern.test(email);
  
  return {
    isValidate: isValidate,
    message: isValidate ? null : 'Введите корректный адрес электронной почты'
  }
}