import type { LoginReqBody } from "../../types/authController/loginReqBody.types"
import { loginFormValidationSchema } from "./schema/ZodSchema/loginFormValidationSchema"

export function loginFormValidator(form: LoginReqBody) {
  const { login, password } = form

  return loginFormValidationSchema.safeParse(form)
}
