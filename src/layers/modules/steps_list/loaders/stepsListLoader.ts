import { RedirectFunction, redirect } from "react-router-dom";
import { IActionProps } from "../../../../types/IActionProps";
import { getStepsList } from "../api/getStepsList";
import { IStepsList } from "../types/IStepsList";
import { RedirectResult } from "@remix-run/router/dist/utils";

export async function stepsListLoader({params}: IActionProps){
  const response = await getStepsList(params.moduleId);
  if (response.status == 200) {
    return response.data;
  }

  return response;
}