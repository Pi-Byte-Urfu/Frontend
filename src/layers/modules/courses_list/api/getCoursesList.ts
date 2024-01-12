import { Axios, AxiosError, AxiosResponse } from "axios";
import { ICoursesList } from "../types/ICoursesList";
import { $api } from "../../../../http";
import { ICourseItem } from "../types/ICourseItem";

export async function getCoursesList() {
  const response = await $api.get<ICoursesList>(`courses/users`);
  return response;
}