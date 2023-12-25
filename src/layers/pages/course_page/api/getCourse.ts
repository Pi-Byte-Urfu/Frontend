import { $api } from "../../../../http";
import { ICourseData } from "../types/ICourseData";

export async function getCourse(courseId: number):Promise<ICourseData> {
  try {
    //const response = await $api.get<ICourseData>(`corses/${courseId}`);
    const example: ICourseData = {
      name: 'Course',
      description: 'description',
      coursePhoto: 'https://w.forfun.com/fetch/fc/fc694db77d99c3724f9cd8b24f997e7f.jpeg',
    }

    return example;
  } catch (error: any) {
    console.log(error)
    return error.response;
  }
}