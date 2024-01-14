import { $api } from "../../../../../../http";
import { IMessage } from "../../../types/IMessage";
import { INewMessage } from "../../../types/INewMessage";

export async function createMessage(chatId: number, userId: number, text: string) {
  const data = {
    text: text,
    userId: userId
  };

  const response = await $api.post<INewMessage>(`chat/${chatId}/message`, data);
  return response;
}