import { z } from "zod/v4"
import type {
  date_of_birth,
  RegisterReqBody,
} from "../../types/authController/registerReqBody.types"
import type { IUserRepository } from "../interfaces/IUserRepository"
import { error_for_fields } from "../constants/errorConstants"
import { isUnderAge } from "../../utils/businessValidationUtils/dateBusinessValidationHelper"

export async function registerUserUseCaseBusinessValidator(
  form: RegisterReqBody,
  userRepository: IUserRepository
) {
  const { email, username, global_name, password, date_of_birth } = form

  const registerBusinessValidationSchema = z.object({
    email: z.email().superRefine(async (email, context) => {
      const emailExists = await userRepository.doesExists({ email })
      if (emailExists) {
        context.addIssue({
          code: "custom",
          message: error_for_fields.email_taken.message,
        })
        return
      }
    }),
    username: z.string().superRefine(async (username, context) => {
      const usernameExists = await userRepository.doesExists({ username })
      if (usernameExists) {
        context.addIssue({
          code: "custom",
          message: error_for_fields.username_taken.message,
        })
        return
      }
    }),
    global_name: z.string(),
    password: z.string(),
    date_of_birth: z
      .object({
        month: z.string(),
        day: z.number(),
        year: z.number(),
      })
      .superRefine((date_of_birth: date_of_birth, context) => {
        if (isUnderAge(date_of_birth)) {
          context.addIssue({
            code: "custom",
            message: error_for_fields.date_of_birth_underage.message,
          })
          return
        }
      }),
  })

  return await registerBusinessValidationSchema.safeParseAsync(form)
}

//  class varient
// class businessValidator {
//   private form: RegisterReqBody
//   constructor(form: RegisterReqBody) {
//     this.form = form
//   }

//   validate() {
//     const { email, username, global_name, password, date_of_birth } = this.form

//   }

//   private isEmailValid() {}
//   private isUsernameValid() {}
//   private isGlobalNameValid() {}
//   private isPasswordValid() {}
//   private isDateOfBirthValid() {}
// }
