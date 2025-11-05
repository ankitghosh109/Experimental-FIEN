// usecases/loginUser.js
export default class LoginUser {
  constructor(userRepo) {
    this.userRepo = userRepo;
  }
  async execute({ email, password }) {
    // 1. Retrieve user by email
    const user = await this.userRepo.findByEmail(email);
    if (!user) throw new Error('Invalid credentials');
    // 2. Verify password
    const match = await someCompareFunction(password, user.hashedPassword);
    if (!match) throw new Error('Invalid credentials');
    // 3. (Optional) generate auth token or session here
    return { userId: user.id /*, token: ... */ };
  }
}
