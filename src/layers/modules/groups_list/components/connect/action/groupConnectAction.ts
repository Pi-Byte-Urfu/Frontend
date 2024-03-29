import { store } from "../../../../../..";
import { IActionProps } from "../../../../../../types/IActionProps";
import { UserType } from "../../../../../../types/userType";
import { groupConnect } from "../api/groupConnect";

export async function groupConnectAction({params}: IActionProps) {
  
  const response = await groupConnect(+params.groupId);

  if (response.status == 200) {
    return 'Вы успешно добавлены в группу';
  } else if (response.status = 400) {
    return response.data.error_message;
  }

  return response;
}