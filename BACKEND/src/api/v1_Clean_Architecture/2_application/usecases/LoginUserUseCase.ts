import type { IUserRepository } from "../interfaces/IUserRepository";

// usecases/loginUser.js
export default class LoginUserUseCase {
  private userRepository : IUserRepository

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }
  async execute({ email, password }: {
    email: string, password: string
  }) {
    // 1. Retrieve user by email
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new Error('Invalid credentials');
    // 2. Verify password
    // const match = await someCompareFunction(password, user.hashedPassword);
    // if (!match) throw new Error('Invalid credentials');
    // 3. (Optional) generate auth token or session here
    // return { userId: user.id /*, token: ... */ };
    return
  }
}
