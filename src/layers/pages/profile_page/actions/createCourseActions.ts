import { redirect } from "react-router-dom";
import { store } from "../../../..";
import { IActionProps } from "../../../../types/IActionProps";

export async function createCourseAction() {
  if (store.user != null) {
    const teacherId = store.user.id;
    // Запрос на сервер
    const responseOwnerId = 1; // Заглушка
    return redirect(`/courseEditor/${responseOwnerId}`)
  }
}