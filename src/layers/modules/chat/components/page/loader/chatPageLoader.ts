import { getChatsList } from "../api/getChatsList";

export async function chatPageLoader() {
  const response = await getChatsList();
  if (response.status == 200) {
    return response.data.chats;
  }

  return response;
}