import { Axios, AxiosResponse } from "axios";
import { $api } from "../http"

interface IGroup {
  id: number
  groupName: string
  creatorId: string
}

export async function getGroup(groupId: number):Promise<AxiosResponse<IGroup>> {
  try {
    const response = await $api.get(`groups/${groupId}`);

    return response;
  } catch (error: any) {
    return error.response;
  }
}