import type { RegisterBody } from "../../types/registerBodyDTO.types"
import type { IUserRepository } from "../interfaces/IUserRepository"

export async function registerUserUseCaseBusinessValidator(
  form: RegisterBody,
  userRepository: IUserRepository
) {
  const { email, username, global_name, password, date_of_birth } = form
const result = await userRepository.doesExists({email})
console.log(result);
  // return .safeParse(form)
}

// function isEmailValid() {}
// function isUsernameValid() {}
// function isGlobalNameValid() {}
// function isPasswordValid() {}
// function isDateOfBirthValid() {}

//  class varient
// class businessValidator {
//   private form: RegisterBody
//   constructor(form: RegisterBody) {
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
