import { AxiosResponse } from "axios";
import { ITestUpdateData } from "../types/ITestUpdateData";
import { $api } from "../../../../../../http";
import { ITestData } from "../types/ITestData";

export async function updateTest(testId: number, updateble: ITestUpdateData):Promise<AxiosResponse> {
  try {
    const response = await $api.patch(`pages/1/${testId}`, updateble);

    return response;
  } catch (error: any) {
    return error.response
  }
}