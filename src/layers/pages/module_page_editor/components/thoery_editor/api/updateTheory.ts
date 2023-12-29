import { AxiosResponse } from "axios";
import { $api } from "../../../../../../http";
import { ITheoryData } from "../../../types/ITheoryData";

export async function updateTheory(pageId: number, updatable: ITheoryData):Promise<AxiosResponse> {
  try {
    const response = await $api.patch(`pages/0/${pageId}`, updatable)

    return response;
  } catch (e: any) {
    
    return e.response;
  }
}