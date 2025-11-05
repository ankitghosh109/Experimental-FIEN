import mongoose from "mongoose"
import User from "../models/userModel.js"
import { dateGenerator } from "../utils/dateUtils.js"
import { validateRegistrationForm } from "../validators/authValidator.js"

export const registerUserService = async (submited_form) => {
  const errors_to_response = {}

  try {
    await validateRegistrationForm(submited_form, errors_to_response)

    //continew registration
    const date_of_birth = dateGenerator(
      submited_form.date_of_birth,
      errors_to_response
    )

    if (Object.keys(errors_to_response).length > 0) {
      const error = new Error(types_of_errors.Invalid_body_form.message)
      error.code = types_of_errors.Invalid_body_form.code
      error.errors = errors_to_response
      throw error
    }

    const user = {
      _id: new mongoose.Types.ObjectId(),
      email: submited_form.email,
      global_name: submited_form.global_name
        ? submited_form.global_name
        : submited_form.username,
      username: submited_form.username,
      password: submited_form.password,
      date_of_birth: date_of_birth,
      created_at: Date.now(),
    }

    await User.create(user)
  } catch (err) {
    console.log(err)
    if (err.code === 11000) {
      const Error = new Error(
        types_of_errors.Invalid_body_form.message
      )
      Error.code = types_of_errors.Invalid_body_form.code
      Error.errors = {}
      Object.keys(err.keyPattern).forEach((key) => {
        Error.errors[key] = error_for_fields[key]
      })
      throw Error
    }
    throw err
  }
}
