import mongoose from "mongoose"
import type { Request, Response } from "express"
import type RegisterUserUseCase from "../../2_application/usecases/RegisterUserUseCase"
import type LoginUserUseCase from "../../2_application/usecases/LoginUserUseCase"
import type { RegisterBody } from "../../types/registerBodyDTO.types"
import { registerFormValidator } from "../form_validation/registerFormValidator"

export default class AuthController {
  private registerUserUseCase: RegisterUserUseCase
  private loginUserUseCase: LoginUserUseCase

  constructor(
    registerUserUseCase: RegisterUserUseCase,
    loginUserUseCase: LoginUserUseCase
  ) {
    this.registerUserUseCase = registerUserUseCase
    this.loginUserUseCase = loginUserUseCase
  }

  async register(req: Request, res: Response) {
    try {
      const { email, global_name, username, password, date_of_birth } =
        req.body as RegisterBody

      const {
        success,
        data: formValidationResult,
        error,
      } = registerFormValidator({
        email,
        global_name,
        username,
        password,
        date_of_birth,
      })

      if (!success) {
        return res.end()
      }

      const UseCaseResponse = await this.registerUserUseCase.execute(
        formValidationResult
      )

      res.status(201).json({
        success: true,
        // userId: result.id
      })
    } catch (err: any) {
      console.log(err)
      res.status(400).json({ success: false, error: err.message })
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body
      const result = await this.loginUserUseCase.execute({ email, password })
      res.status(200).json({ success: true, data: result })
    } catch (err: any) {
      res.status(401).json({ success: false, error: err.message })
    }
  }
}
