import { AxiosResponse } from "axios";
import { $api } from "../../../../../../http";
import { ITestData } from "../types/ITestData";

export async function getTest(testId: number):Promise<AxiosResponse<ITestData>> {
  try {
    const response = await $api.get<ITestData>(`pages/1/${testId}`)
    return response
  } catch (error: any) {
    return error.response
  }
}