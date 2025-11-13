import { getRedisClient } from "../../4_frameworks_drivers/loaders/redisClient"
import type { LoginReqBody } from "../../types/authController/loginReqBody.types"
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

    const { success, data: senitizedData, error } = await loginUserUseCaseBusinessValidator(
      { login, password },
      this.userRepository
    )

    if (!success) {
      console.log(error)
      return { success, error: error }
    }

    

    

  

    // 3. (Optional) generate auth token or session here
    // return { userId: user.id /*, token: ... */ };
    return
  }
}
