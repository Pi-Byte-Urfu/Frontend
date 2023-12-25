import { $api } from "../../../../http";
import { IProfileDataMain } from "../types/IProfileDataResponse";

export async function updateProfileData(formData: IProfileDataMain) {
  try {
  //const response = $api.post('', JSON.stringify(formData))
  const response =  {
    status: 200,
    data: {
      name: 'stas',
      surname: '',
      patronymic: '',
      email: '',
    }
  }

  return response;
  return     
  } catch(e: any) {
    return e.response
  }
}