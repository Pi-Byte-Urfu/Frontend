import { getProfileData } from "../api/getProfileData";
import { IProfileDataResponse } from "../types/IProfileDataResponse";

export async function profileDataLoader():Promise<IProfileDataResponse | null> {
  //const response = await getProfileData();
  const response =  {
    status: 200,
    data: {
      name: 'stas',
      surname: '',
      patronymic: '',
      email: '',
      photoUrl: 'http://5.23.54.98:8080/api/v1/accounts/1/photo'
    }
  }

  if (response.status == 200) {
    return response.data as IProfileDataResponse;
  }

  return null;
}