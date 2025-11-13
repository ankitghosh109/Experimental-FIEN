import type { Types } from "mongoose"
import type { IUserRepository } from "../interfaces/IUserRepository.js"
import UserFactory from "../Factories/UserFactory"
import UserEntity from "../../1_domain/entities/UserEntity"
import type { RegisterReqBody } from "../../types/authController/registerReqBody.types.js"
import { registerUserUseCaseBusinessValidator } from "../Business_validation/registerUserUseCaseBusinessValidation.js"

export default class RegisterUserUseCase {
  private userRepository: IUserRepository

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository
  }
  async execute(form: RegisterReqBody) {
    const { email, username, global_name, password, date_of_birth } = form

    const {
      success,
      data: sanitizedData,
      error,
    } = await registerUserUseCaseBusinessValidator(
      {
        email,
        username,
        global_name,
        password,
        date_of_birth,
      },
      this.userRepository
    )
    if (!success) {
      console.log(error)
      return { success, error: error }
    }

    const userFactory = new UserFactory(UserEntity)
    const toRegister = userFactory.createUserEntity(sanitizedData)

    this.userRepository.save(toRegister)

    return { success: true, data: { _id: toRegister._id } }
  }
}
