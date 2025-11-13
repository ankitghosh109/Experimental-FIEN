import type { RegisterReqBody } from "../../types/authController/registerReqBody.types"
import { registerFormValidationSchema } from "./schema/ZodSchema/registerFormValidationSchema"

export function registerFormValidator(form: RegisterReqBody) {
  // const { email, username, global_name, password, date_of_birth } = form
  return registerFormValidationSchema.safeParse(form)
}

// export function registerFormValidator(form: RegisterReqBody) {
//   const { email, username, global_name, password, date_of_birth } = form
// helper will used here
// z.flattenError(error)
// const result: {
//   email: z.ZodSafeParseResult<string>
//   username: z.ZodSafeParseResult<string>
//   global_name: z.ZodSafeParseResult<string>
//   password: z.ZodSafeParseResult<string>
//   date_of_birth: z.ZodSafeParseResult<{
//     month: string
//     day: number
//     year: number
//   }>
// } = {
//   email: isEmailValid(email),
//   username: isUsernameValid(username),
//   global_name: isGlobalNameValid(global_name),
//   password: isPasswordValid(password),
//   date_of_birth: isDateOfBirthValid(date_of_birth),
// }

// console.log(result)
// return
// return result
// }

//   helper
// function isEmailValid(email: string) {
//   const result = z.email().safeParse(email.trim())
//   return result
// }
// function isUsernameValid(username: string) {
//   const result = z.string().safeParse(username)
//   return result
// }
// function isGlobalNameValid(global_name: string) {
//   const result = z.string().safeParse(global_name)
//   return result
// }
// function isPasswordValid(password: string) {
//   const result = z.string().safeParse(password)
//   return result
// }
// function isDateOfBirthValid(date_of_birth: {
//   month: string
//   day: number
//   year: number
// }) {
//   const result = z
//     .object({
//       month: z.string(),
//       day: z.number(),
//       year: z.number(),
//     })
//     .safeParse(date_of_birth)

//   return result
// }

// class variant
// class registerFormValidator {
//   private form: RegisterReqBody
//   constructor(form: RegisterReqBody) {
//     this.form = form
//   }

//   validate() {
//     const { email, username, global_name, password, date_of_birth } = this.form
//     // helper will used here
//   }

// //   helper
//   private isEmailValid() {}
//   private isUsernameValid() {}
//   private isGlobalNameValid() {}
//   private isPasswordValid() {}
//   private isDateOfBirthValid() {}
// }
