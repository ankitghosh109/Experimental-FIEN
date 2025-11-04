import mongoose from "mongoose"
import User from "../models/userModel.js"
import { dateGenerator } from "../utils/dateUtils.js"
import {
  error_for_fields,
  types_of_errors,
} from "../constants/errorConstants.js"
import { validateRegistrationForm } from "../validators/authValidator.js"
import { registerUserService } from "../services/authService.js"

export const registerUser = async (req, res) => {
  const submited_form = req.body
  try {
    await registerUserService(submited_form)
    res.status(200).json({ message: "User registered successfully" })
  } catch (err) {
    console.log(err);
    res.status(400).json({
      code: err.code || 400,
      message: err.message || "Something went wrong",
      errors: err.errors || null,
    })
  }
 
}

export const loginUser = async (req, res) => {
  const submited_form = req.body
  const user = await User.findOne({
    email: submited_form.login,
    password: submited_form.password,
  })

  console.log(user)
  res.end()
}
