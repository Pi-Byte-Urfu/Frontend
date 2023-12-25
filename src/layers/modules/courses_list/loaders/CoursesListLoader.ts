import { $api2 } from "../../../../http";
import { ICourseItem } from "../types/ICourseItem";

export async function coursesListLoader():Promise<ICourseItem[]> {
  // Вместо запроса на сервер
  const courses: ICourseItem[] = [
    {
      id: 1,
      title: 'Заголовок 1',
      coverURL: 'https://w.forfun.com/fetch/c0/c03f30ec74590dad94944fa62bc22b40.jpeg'
    },
    {
      id: 2,
      title: 'Заголовок 1',
      coverURL: 'https://w.forfun.com/fetch/c0/c03f30ec74590dad94944fa62bc22b40.jpeg'
    },
    {
      id: 3,
      title: 'Заголовок 1',
      coverURL: 'https://w.forfun.com/fetch/c0/c03f30ec74590dad94944fa62bc22b40.jpeg'
    },
    {
      id: 4,
      title: 'Заголовок 1',
      coverURL: 'https://w.forfun.com/fetch/c0/c03f30ec74590dad94944fa62bc22b40.jpeg'
    },
    {
      id: 5,
      title: 'Заголовок 1',
      coverURL: 'https://w.forfun.com/fetch/c0/c03f30ec74590dad94944fa62bc22b40.jpeg'
    },
    {
      id: 6,
      title: 'Заголовок 1',
      coverURL: 'https://w.forfun.com/fetch/c0/c03f30ec74590dad94944fa62bc22b40.jpeg'
    },
  ];

  return courses;
}