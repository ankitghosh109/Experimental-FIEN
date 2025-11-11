import UserEntity from "../../1_domain/entities/UserEntity"
import type { RegisterBody } from "../../types/registerBodyDTO.types"

export default class UserFactory {
  private userEntity: typeof UserEntity

  constructor(userEntity: typeof UserEntity) {
    this.userEntity = userEntity
  }

  createUserEntity(data: RegisterBody) {
    return new this.userEntity(data)
  }
}
