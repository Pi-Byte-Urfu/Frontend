import { IActionProps } from "../../../../../../types/IActionProps";
import { getMessage } from "../../chatNavItem/api/getMessage";
import { getMessages } from "../api/getMessages";

export async function messagesLoader({params}: IActionProps) {
  const respone = await getMessages(+params.chatId);

  if (respone.status == 200) {
    return respone.data.messages;
  }

  return respone;
}