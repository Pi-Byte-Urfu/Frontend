import { AxiosResponse } from "axios";
import { $api } from "../../../../../../http";

export interface IUserResponse {
  id: number
  email: string
  name: string
  surname: string
  patronymic: string
  photoUrl: string
}

export async function getUser(userId: number):Promise<AxiosResponse<IUserResponse>> {
  const response = $api.get<IUserResponse>(`accounts/user/${userId}`);

  return response;
}