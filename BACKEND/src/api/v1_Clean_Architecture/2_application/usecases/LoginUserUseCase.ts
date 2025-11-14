import { getRedisClient } from "../../4_frameworks_drivers/loaders/singleton loaders/redisClient"
import type { LoginReqBody } from "../../types/authController/loginReqBody.types"
import assignSession from "../../utils/useCaseUtils/loginUserUseCaseUtils/assignSession"
import { loginUserUseCaseBusinessValidator } from "../Business_validation/loginUserUseCaseBusinessValidation"
import type { IUserRepository } from "../interfaces/IUserRepository"

// usecases/loginUser.js
export default class LoginUserUseCase {
  private userRepository: IUserRepository

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository
  }
  async execute(form: LoginReqBody) {
    const { login, password } = form
    const {
      success,
      data: senitizedData,
      error,
    } = await loginUserUseCaseBusinessValidator(
      { login, password },
      this.userRepository
    )
    if (!success) {
      console.log(error)
      return { success, error: error }
    }

    const cookieToSet = await assignSession(login, this.userRepository)
    if (!cookieToSet) return null
    return { cookieToSet }
  }
}
