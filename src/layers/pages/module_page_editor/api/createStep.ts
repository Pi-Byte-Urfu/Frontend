import { AxiosResponse } from "axios";
import { $api } from "../../../../http";
import { IStepForm, IStepResponse } from "../types/IStep";

export async function createStep(step: IStepForm):Promise<AxiosResponse<IStepResponse>> {
    const resposne = await $api.post<IStepResponse>(`pages`, step);

    return resposne;
}