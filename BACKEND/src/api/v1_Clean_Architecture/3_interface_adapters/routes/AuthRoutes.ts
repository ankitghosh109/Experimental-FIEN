import express from "express"
import AuthController from "../controllers/AuthController"
import MongoUserRepository from "../persistence/MongoUserRepository"
import RegisterUserUseCase from "../../2_application/usecases/RegisterUserUseCase"
import LoginUserUseCase from "../../2_application/usecases/LoginUserUseCase"

const userRepository = new MongoUserRepository()
const registerUserUseCase = new RegisterUserUseCase(userRepository)
const loginUserUseCase = new LoginUserUseCase(userRepository)
const authController = new AuthController(registerUserUseCase, loginUserUseCase)

const router = express.Router()
//with bind method
router.post("/register", authController.register.bind(authController))
router.post("/login", authController.login.bind(authController))

export default router
