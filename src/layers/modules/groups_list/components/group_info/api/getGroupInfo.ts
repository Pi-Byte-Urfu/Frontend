import { AxiosResponse } from "axios";
import { $api } from "../../../../../../http";
import { IGroupInfoItem } from "../../../types/IGrouInfoItem";
import { IGroupInfo } from "../../../types/IGroupInfo";

export async function getGroupInfo(groupId: number):Promise<AxiosResponse<IGroupInfo>> {
    const response = await $api.get(`groups/${groupId}/students`)
    return response;
}