import { AxiosResponse } from "axios";
import { $api } from "../../../../http";
import { IModulesListData } from "../types/IModulesListData";

export async function getModulesList(courseId: number):Promise<AxiosResponse<IModulesListData>> {
  try {
    const response = await $api.get<IModulesListData>(`chapters/course/${courseId}`);

    return response;
  } catch (error: any) {
    return error.response;
  }
}