import { $api } from "../http";

export async function removeEntity(path: string) {
  try {
    const response = $api.delete(path)
    return response
  } catch (error: any) {
    return error.response;
  }
}