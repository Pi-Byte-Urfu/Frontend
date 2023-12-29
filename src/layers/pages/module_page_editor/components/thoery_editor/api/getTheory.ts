import { AxiosResponse } from "axios";
import { $api } from "../../../../../../http";
import { ITheoryData } from "../../../types/ITheoryData";

export async function getTheory(pageId: number):Promise<AxiosResponse<ITheoryData>> {
  try {
    const response = await $api.get<ITheoryData>(`pages/0/${pageId}`);

    return response;
  } catch (error: any) {
    return error.response;
  }
}