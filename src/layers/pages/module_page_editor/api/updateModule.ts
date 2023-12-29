import { AxiosResponse } from "axios";
import { IModuleData } from "../types/IModuleData";
import { $api } from "../../../../http";

export async function updateModule(moduleId: number, updatable: IModuleData):Promise<AxiosResponse<IModuleData>> {
  try {
    const response = await $api.patch(`chapters/${moduleId}`, JSON.stringify(updatable));
    return response;
  } catch (error:any) {
    return error.response;
  }
}