import { AxiosResponse } from "axios";
import { $api } from "../../../../../../http";
import { IMessage } from "../../../types/IMessage";

interface IMessageListResponse {
  messages: IMessage[]
}

export async function getMessages(chatId: number):Promise<AxiosResponse<IMessageListResponse>> {
  const respone = $api.get(`chat/${chatId}/message`);

  return respone;
}