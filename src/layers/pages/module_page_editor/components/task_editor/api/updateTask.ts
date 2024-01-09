import { AxiosResponse } from "axios";
import { $api } from "../../../../../../http";
import { ITaskData } from "../types/ITaskData";

export async function updateTask(pageId: number, updatable: ITaskData):Promise<AxiosResponse> {
  try {
    const response = await $api.patch(`pages/2/${pageId}`, updatable)

    return response;
  } catch (e: any) {
    
    return e.response;
  }
}