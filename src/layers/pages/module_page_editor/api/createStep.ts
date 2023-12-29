import { AxiosResponse } from "axios";
import { $api } from "../../../../http";
import { IStepForm, IStepResponse } from "../types/IStep";

export async function createStep(step: IStepForm):Promise<AxiosResponse<IStepResponse>> {
  try {
    const resposne = await $api.post<IStepResponse>(`pages`, step);

    return resposne;
  } catch (error: any) {
    return error.response;
  }
}