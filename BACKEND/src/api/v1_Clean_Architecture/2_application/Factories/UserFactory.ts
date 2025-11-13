import { Types } from "mongoose"
import UserEntity from "../../1_domain/entities/UserEntity"
import type { RegisterReqBody } from "../../types/authController/registerReqBody.types"
import { email } from "zod"
import { dateGenerator } from "../../utils/factoryUtils/dateFactoryHelper"

export default class UserFactory {
  private userEntity: typeof UserEntity

  constructor(userEntity: typeof UserEntity) {
    this.userEntity = userEntity
  }

  createUserEntity(data: RegisterReqBody) {
    const { email, username, global_name, password, date_of_birth } = data

    const userInfo = {
      _id: new Types.ObjectId(),
      email: email.trim(),
      username: username.trim(),
      global_name: global_name.trim() ? global_name.trim() : username.trim(),
      password: password,
      date_of_birth: dateGenerator(date_of_birth),
      created_at: new Date(),
    }

    return new this.userEntity(userInfo)
  }
}
