import { $api2 } from "../../../../http";
import { MyError } from "../../../../types/MyError";
import { getCoursesList } from "../api/getCoursesList";
import { ICourseItem } from "../types/ICourseItem";

export async function coursesListLoader() {
  const response = await getCoursesList();
  if (response.status == 200) {
    return response.data.courseList;
  }

  return response;
}