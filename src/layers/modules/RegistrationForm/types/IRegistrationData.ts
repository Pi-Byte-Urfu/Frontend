import { UserType } from "../../../../types/userType"

export type IRegistrationData = {
  email: string
  password: string
  userType: UserType
}