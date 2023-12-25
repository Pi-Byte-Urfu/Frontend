import { AxiosResponse } from "axios";
import { $api } from "../../../../http";
import { IModulesListData } from "../types/IModulesListData";

export async function getModulesList(courseId: number):Promise<IModulesListData> {
  try {
    // const response = await $api.get<IModulesListData>(`/modulesList/${courseId}`)
    const example:IModulesListData = {
      modules:[
        {
        id: 1,
        name: 'module1'
        },
        {
          id: 2,
          name: 'module 2'
        }]
    }
    return example;
  } catch (error: any) {
    return error.response;
  }
}