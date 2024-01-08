import { AxiosResponse } from "axios";
import { $api } from "../../../../../../http";
import { IGroupsList } from "../types/IGroupsList";
import { IGroupListItem } from "../../../types/IGroupList";

export async function getGroupsList(teacherId: number):Promise<AxiosResponse<IGroupListItem[]>> {
  try {
    const response = await $api.get(`groups/teachers/${teacherId}`);
    return response;
  } catch (error: any) {
    console.log(error)
    return error.response;
  }
}