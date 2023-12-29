import { AxiosResponse } from "axios";
import { IModuleData } from "../types/IModuleData";
import { $api } from "../../../../http";

export async function getModule(moduleId: number) {
 try {
  const response = await $api.get<IModuleData>(`chapters/${moduleId}`);

  return response
 } catch (error: any) {
  return error.response;
 }
}