import { IActionProps } from "../../../../../../types/IActionProps";
import { IMessage } from "../../../types/IMessage";
import { INewMessage } from "../../../types/INewMessage";
import { createMessage } from "../api/createMessage";

export async function newMessageAction({params, request}: IActionProps) {
  const formData = Object.fromEntries(await request.formData()) as any;
  const response = await createMessage(+params.chatId, +params.userId, formData.text);
  if (response.status == 200) {
    const data: IMessage = {
      messageId: response.data.id,
      senderId: response.data.userId,
      messageText: response.data.messageText,
      isRead: false,
      createdAt: response.data.createdAt
    }

    return data;
  }
  return response;
}