import { AxiosResponse } from "axios";
import { $api } from "../../../../../../http";
import { ITaskData } from "../types/ITaskData";

export async function getTask(stepId: number): Promise<AxiosResponse<ITaskData>> {
  try {
    const response = await $api.get(`pages/2/${stepId}`);

    return response;
  } catch (error: any) {
    return error.response;
  }
}