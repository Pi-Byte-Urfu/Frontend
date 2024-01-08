import { redirect } from "react-router-dom";
import { store } from "../../../../../..";
import { IActionProps } from "../../../../../../types/IActionProps";
import { INewGroupsListItem } from "../../../types/INewGroupsListItem";
import { createGroup } from "../api/createGroup";

export async function createGroupActon({ request, params }: IActionProps) {
  const formdata = Object.fromEntries(await request.formData()) as any as INewGroupsListItem;
  const response = await createGroup(+params.userId, formdata);
  if (response.status == 200) {
    return redirect(`/profile/${params.userId}/groups/info/${response.data.id}`);
  }

  return redirect('/')
}