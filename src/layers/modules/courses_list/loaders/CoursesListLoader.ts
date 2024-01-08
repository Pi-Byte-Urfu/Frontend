import { $api2 } from "../../../../http";
import { getCoursesList } from "../api/getCoursesList";
import { ICourseItem } from "../types/ICourseItem";

export async function coursesListLoader() {
  const coursesList = await getCoursesList();
  return coursesList;
}