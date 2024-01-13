import { IActionProps } from "../../../../../../types/IActionProps";
import { getMessage } from "../api/getMessage";

export async function messageLoader({ params }: IActionProps) {
  const response = await getMessage(+params.messageId);

  if (response.status == 200) {
    return response.data.message;
  }

  return response;
}