import { AxiosResponse } from "axios";
import { $api } from "../../../../../../http";
import { IMessage } from "../../../types/IMessage";

interface IMessageResponse {
  message: IMessage
}

export async function getMessage(messageId: number):Promise<AxiosResponse<IMessageResponse>> {
  const response = await $api.get(`chat/message/${messageId}`);

  return response;
}