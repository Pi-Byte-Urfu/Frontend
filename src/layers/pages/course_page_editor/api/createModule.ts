import { AxiosResponse } from "axios";
import { $api } from "../../../../http";
import { IModuleForm } from "../types/IModuleForm";
import { IModuleResponse } from "../types/IModuleResponse";

export async function createModule(module: IModuleForm):Promise<AxiosResponse<IModuleResponse>> {
    const response = await $api.post<IModuleResponse>(`chapters`, module);

    return response
}