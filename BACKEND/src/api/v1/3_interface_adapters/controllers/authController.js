import mongoose from "mongoose"

// controllers/authController.js
export default class AuthController {
  constructor(registerUseCase, loginUseCase) {
    this.registerUseCase = registerUseCase
    this.loginUseCase = loginUseCase
  }

  async register(req, res) {
    try {
      const { email, global_name, username, password, date_of_birth } = req.body
      const result = await this.registerUseCase.execute({
        _id: new mongoose.Types.ObjectId(),
        email,
        global_name,
        username,
        password,
        date_of_birth,
      })
      res.status(201).json({ success: true, 
        // userId: result.id 
      })
    } catch (err) {
      console.log(err)
      res.status(400).json({ success: false, error: err.message })
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body
      const result = await this.loginUseCase.execute({ email, password })
      res.status(200).json({ success: true, data: result })
    } catch (err) {
      res.status(401).json({ success: false, error: err.message })
    }
  }
}
