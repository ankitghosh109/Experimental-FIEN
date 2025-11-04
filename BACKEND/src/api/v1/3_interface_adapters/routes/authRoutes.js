// routes/authRoutes.js
import express from "express"
import AuthController from "../controllers/authController.js"
const router = express.Router()

// Composition: create repository, use cases, and controller instances
import UserRepository from "../repositories/userRepository.js"
import RegisterUser from "../../2_application/usecases/registerUser.js"
import LoginUser from "../../2_application/usecases/loginUser.js"
import UserRepositoryImplementation from "../implementations/userRepositoryImplementation.js"

const userRepo = new UserRepositoryImplementation()
const registerUser = new RegisterUser(userRepo)
const loginUser = new LoginUser(userRepo)
const authController = new AuthController(registerUser, loginUser)

// Route definitions
// router.post("/register", (req, res) => authController.register(req, res))
// router.post("/login", (req, res) => authController.login(req, res))

//with bind method
router.post("/register", authController.register.bind(authController))
router.post("/login", authController.login.bind(authController))

export default router
