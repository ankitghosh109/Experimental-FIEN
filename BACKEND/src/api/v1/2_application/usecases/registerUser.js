import User from "../../1_domain/entities/userEntity.js"

// usecases/registerUser.js
export default class RegisterUser {
  constructor(userRepo) {
    this.userRepo = userRepo
  }
  async execute({
    _id,
    email,
    global_name,
    username,
    password,
    date_of_birth,
  }) {
    // 1. Validate input
    if (!email || !password) throw new Error("Email and password are required")
    // 2. Check if user exists
    const existing = await this.userRepo.findByEmail(email)
    if (existing) throw new Error("User already exists")
    // 3. Apply business rules (e.g. email format)
    //    (could use User.isValidEmail if desired)
    // 4. Hash password
    // const hashed = await someHashFunction(password);
    // 5. Create and save domain User
    const domainUser = new User({
      _id,
      email,
      global_name,
      username,
      password,
      date_of_birth: new Date(),
      created_At: new Date(),
    })
    console.log(domainUser)
    const saved = await this.userRepo.create(domainUser)
    // return { id: saved._id, email: saved.email };
  }
}
