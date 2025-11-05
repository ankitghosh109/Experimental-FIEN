// repository/userRepository.js (using Mongoose)
// import User from '../domain/userEntity.js';
import UserModel from "../models/userModel.js"
import { UserRepositoryInterface } from "../interfaces/userRepositoryinterface.js"

export default class UserRepositoryImplementation extends UserRepositoryInterface {
  async create(domainUser) {
    const data = await UserModel.create(domainUser)
    // Map DB record to domain entity
    // return new User(data._id, data.email, data.hashedPassword, data.created_at);
    return
  }
  async findByEmail(email) {
    const data = await UserModel.findOne({ email })
    if (!data) return null
    // return new User(data._id, data.email, data.hashedPassword, data.created_at);
    return
  }
  // ... (other methods: findById, etc.)
}
