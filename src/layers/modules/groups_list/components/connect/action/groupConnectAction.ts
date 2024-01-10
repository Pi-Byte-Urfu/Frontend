import { store } from "../../../../../..";
import { IActionProps } from "../../../../../../types/IActionProps";
import { UserType } from "../../../../../../types/userType";
import { groupConnect } from "../api/groupConnect";

export async function groupConnectAction({params}: IActionProps) {

  if (store.user?.userType == UserType.teacher) {
    return 'В группу могут быть добавлены только ученики';
  }
  const response = await groupConnect(+params.groupId);

  if (response.status == 200) {
    return 'Вы успешно добавлены в группу';
  }

  return response.data.error_message;
}