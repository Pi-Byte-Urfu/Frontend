import { Context } from "vm";

export interface IActionProps {
  context?: Context | undefined,
  params: any,
  request: Request
}