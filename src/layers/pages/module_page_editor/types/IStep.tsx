import { StepType } from "../../../../types/stepType";

export interface IStepForm {
  name: string,
  pageType: StepType,
  chapterId: number
}

export interface IStepResponse {
  id: number,
}