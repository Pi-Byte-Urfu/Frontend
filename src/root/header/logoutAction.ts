import { redirect } from "react-router-dom";
import { store } from "../..";

export async function logoutAction() {
  store.logout();
  return redirect('/')
}