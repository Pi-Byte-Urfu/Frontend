import { IOptionAnswer } from "../../../../types/IOptionAnswer"
import { QuestionType } from "../../../../types/QuestionType"

export interface IQuestion {
  name: string,
  questionType: QuestionType
  optionsAnswers: IOptionAnswer[]
}