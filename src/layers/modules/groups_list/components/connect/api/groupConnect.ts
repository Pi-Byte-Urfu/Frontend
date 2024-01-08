import { AxiosResponse } from "axios";
import { $api } from "../../../../../../http";

export async function groupConnect(groupId: number):Promise<AxiosResponse> {
  try {
    const data = {
      groupId: groupId
    }
    const response = await $api.post('groups/connect', data);

    return response
  } catch (error: any) {
    console.log(error.response)
    return error.response
  }
}