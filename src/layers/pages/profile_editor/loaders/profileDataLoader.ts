import { getProfileData } from "../api/getProfileData";
import { IProfileDataResponse } from "../types/IProfileDataResponse";

export async function profileDataLoader():Promise<IProfileDataResponse | null> {
  const response = await getProfileData();

  if (response.status == 200) {
    return response.data;
  }

  return null;
}