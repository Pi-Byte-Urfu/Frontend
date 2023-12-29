import { redirect } from "react-router-dom";
import { store } from "../../../..";
import { IActionProps } from "../../../../types/IActionProps";
import { createCourse } from "../api/createCourse";

export async function createCourseAction() {
  if (store.user != null) {
    const teacherId = store.user.id;
    const response = await createCourse(store.user.id);
    if (response.status == 200) {
      return redirect(`/courseEditor/${response.data.id}`)
    }
    
  }
}