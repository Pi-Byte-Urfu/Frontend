import { AxiosResponse } from "axios";
import { $api } from "../../../../../../http";
import { INewGroupsListItem } from "../../../types/INewGroupsListItem";

interface ICreateGroupResponse {
  id: number
}

export async function createGroup(teacherId: number, data: INewGroupsListItem):Promise<AxiosResponse<ICreateGroupResponse>> {
  try {
    const newGroup = {
      groupName: data.groupName,
      userId: teacherId
    };

    const response = await $api.post<ICreateGroupResponse>('groups', newGroup)

    return response;
  } catch (error: any) {
    return error.response;
  }
}