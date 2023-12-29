import { Axios, AxiosResponse } from "axios";
import { $api } from "../../../../http";
import { StepType } from "../../../../types/stepType";
import { IStepsList } from "../types/IStepsList";

export async function getStepsList(moduleId: number): Promise<AxiosResponse<IStepsList>> {
  try {
    const response = await $api.get<IStepsList>(`pages/${moduleId}`);
    return response;
  }
  catch (e: any) {
    console.log(e);
    return e.response;
  }
}