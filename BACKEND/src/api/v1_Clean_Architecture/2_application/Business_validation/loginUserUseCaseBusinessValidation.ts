import { z } from "zod/v4"
import bcrypt from "bcrypt"
import type { LoginReqBody } from "../../types/authController/loginReqBody.types"
import type { IUserRepository } from "../interfaces/IUserRepository"
import { error_for_fields } from "../constants/errorConstants"

export async function loginUserUseCaseBusinessValidator(
  form: LoginReqBody,
  userRepository: IUserRepository
) {
  const { login, password } = form

  const loginBusinessValidationSchema = z
    .object({
      login: z.email(),
      password: z.string(),
    })
    .superRefine(async (data, context) => {
      const { login, password } = data

      const QueryResult = await userRepository.findPassByEmail(login)
      if (!QueryResult) {
        context.addIssue({
          code: "custom",
          message: error_for_fields.invalid_login.message,
        })
        return
      } else if (QueryResult) {
        const isMatch =await bcrypt.compare(password, QueryResult.password)
        if (!isMatch) {
          context.addIssue({
            code: "custom",
            message: error_for_fields.invalid_login.message,
          })
          return
        }
      }
    })

  return await loginBusinessValidationSchema.safeParseAsync(form)
}
