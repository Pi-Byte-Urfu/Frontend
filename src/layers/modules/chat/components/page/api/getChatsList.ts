import { AxiosResponse } from "axios";
import { $api } from "../../../../../../http";
import { IChat } from "../../../types/IChat";

interface IChatsListResponse {
  chats: IChat[]
}

export async function getChatsList():Promise<AxiosResponse<IChatsListResponse>> {
  const response = await $api.get(`chat`);

  return response;
}