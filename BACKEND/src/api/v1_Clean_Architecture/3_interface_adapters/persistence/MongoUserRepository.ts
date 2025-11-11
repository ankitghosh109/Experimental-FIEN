import type UserEntity from "../../1_domain/entities/UserEntity.js"
import type { IUserRepository } from "../../2_application/interfaces/IUserRepository.js"
import UserModel from "../models/UserModel"

export default class MongoUserRepository implements IUserRepository {
  async save(User: UserEntity) {
    const data = await UserModel.create(User)
    return data
    // Map DB record to domain entity
    // return new User(data._id, data.email, data.hashedPassword, data.created_at);
  }
  async findByEmail(email: string) {
    const data = await UserModel.findOne({ email })
    if (!data) return null
    // return new User(data._id, data.email, data.hashedPassword, data.created_at);
    return
  }
  async doesExists(searchQuery: object) {
    const data = await UserModel.exists(searchQuery)
    return data
  }
  // ... (other methods: findById, etc.)
}
