import { AxiosResponse } from "axios";
import { $api } from "../../../../../../http";

export async function groupConnect(groupId: number): Promise<AxiosResponse> {
  const data = {
    groupId: groupId
  }
  const response = await $api.post('groups/connect', data);
  return response;
}