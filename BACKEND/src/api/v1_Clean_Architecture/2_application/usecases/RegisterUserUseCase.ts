import type { Types } from "mongoose"
import type { IUserRepository } from "../interfaces/IUserRepository.js"
import UserFactory from "../Factories/UserFactory"
import UserEntity from "../../1_domain/entities/UserEntity"
import type { RegisterBody } from "../../types/registerBodyDTO.types.js"
import { registerUserUseCaseBusinessValidator } from "../Business_validation/registerUserUseCaseBusinessValidator.js"

export default class RegisterUserUseCase {
  private userRepository: IUserRepository

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository
  }
  async execute(form: RegisterBody) {
    const { email, username, global_name, password, date_of_birth } = form

    const businessValidationResult = registerUserUseCaseBusinessValidator({
      email,
      username,
      global_name,
      password,
      date_of_birth,
    }, this.userRepository)

    // console.log(businessValidationResult);
    return 

    const userFactory = new UserFactory(UserEntity)

    const user = userFactory.createUserEntity(businessValidationResult)

    this.userRepository.save(user)
    // console.log({
    //   _id,
    //   email,
    //   global_name,
    //   username,
    //   password,
    //   date_of_birth,
    // })
    // return

    // 1. Validate input
    // if (!email || !password) throw new Error("Email and password are required")
    // 2. Check if user exists
    // const existing = await this.userRepo.findByEmail(email)
    // if (existing) throw new Error("User already exists")
    // 3. Apply business rules (e.g. email format)
    //    (could use User.isValidEmail if desired)
    // 4. Hash password
    // const hashed = await someHashFunction(password);
    // 5. Create and save domain User
    // const domainUser = new User({
    //   _id,
    //   email,
    //   global_name,
    //   username,
    //   password,
    //   date_of_birth: new Date(),
    //   created_At: new Date(),
    // })
    // console.log(domainUser)
    // const saved = await this.userRepo.create(domainUser)
    // return { id: saved._id, email: saved.email };
  }
}
