import mongoose from "mongoose"
import type { Request, Response } from "express"
import type RegisterUserUseCase from "../../2_application/usecases/RegisterUserUseCase"
import type LoginUserUseCase from "../../2_application/usecases/LoginUserUseCase"
import type { RegisterReqBody } from "../../types/authController/registerReqBody.types"
import { registerFormValidator } from "../form_validation/registerFormValidator"
import { z } from "zod/v4"
import type { LoginReqBody } from "../../types/authController/loginReqBody.types"
import { loginFormValidator } from "../form_validation/loginFormValidation"

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
        req.body as RegisterReqBody

      const {
        success,
        data: sanitizedData,
        error,
      } = registerFormValidator({
        email,
        global_name,
        username,
        password,
        date_of_birth,
      })

      if (!success) {
        console.log(error)
        return res
          .status(400)
          .json({ success, error: z.flattenError(error).fieldErrors })
      }
      const UseCaseResponse = await this.registerUserUseCase.execute(
        sanitizedData
      )
      if (!UseCaseResponse.success) {
        if (UseCaseResponse.error) {
          console.log(UseCaseResponse.error)
          return res.status(400).json({
            success: UseCaseResponse.success,
            error: z.flattenError(UseCaseResponse.error).fieldErrors,
          })
        }
      }

      res.status(201).json({
        success: true,
        data: {
          message: "Successfully Registered!!!",
          userId: UseCaseResponse.data._id.toString(),
        },
      })
    } catch (err: any) {
      console.log(err)
      res.status(400).json({ success: false, error: err.message })
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { login, password } = req.body as LoginReqBody

      const {
        success,
        data: sanitizedData,
        error,
      } = loginFormValidator({ login, password })

      if (!success) {
        console.log(error)
        return res.status(401).json({ success: false, error: error })
      }

      const UseCaseResponse = await this.loginUserUseCase.execute(sanitizedData)
      if (!UseCaseResponse.success) {
        console.log(UseCaseResponse.error)
        return res
          .status(401)
          .json({ success: UseCaseResponse.success, error: UseCaseResponse.error })
      }
      const { data } = UseCaseResponse
      res
        .cookie(
          data!.cookieToSet.name,
          data!.cookieToSet.value,
          data!.cookieToSet.config
        )
        .status(200)
        .json({ success: true, data: { message: "Successfully logged!!!" } })
    } catch (err: any) {
      console.log(err)
      res.status(401).json({ success: false, error: err.message })
    }
  }
}
