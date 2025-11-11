import { error_for_fields } from "../constants/errorConstants.js"
import { commonPasswords } from "../constants/passwordConstants.js"
import User from "../models/userModel.js"
import { isRepeatedPattern, isSequential } from "../utils/passwordUtils.js"

export async function validateRegistrationForm(form, errors_to_response) {
  const password = form.password
  const lower = password.toLowerCase()

  const [emailExists, usernameExists] = await Promise.all([
    User.exists({ email: form.email }),
    User.exists({ username: form.username }),
  ])

  if (emailExists) {
    errors_to_response.email = error_for_fields.email_taken
  }
  if (usernameExists) {
    errors_to_response.username = error_for_fields.username_taken
  }

  // 🧠 Rule 1: Too short
  if (password.length < 8) {
    errors_to_response.password = error_for_fields.password_small
  }
  // 🧠 Rule 2: Common passwords
  else if (commonPasswords.includes(lower)) {
    errors_to_response.password = error_for_fields.password_common
  }
  // 🧠 Rule 3: All characters same or repeating pattern
  else if (/^(.)(\1)+$/.test(lower) || isRepeatedPattern(lower)) {
    errors_to_response.password = error_for_fields.password_repeat
  }
  // 🧠 Rule 4: Date-like patterns (e.g. 2000, 12-12-2000)
  else if (
    /\b(19|20)\d{2}\b/.test(password) ||
    /\d{2}[./-]?\d{2}[./-]?\d{2,4}/.test(password)
  ) {
    errors_to_response.password = error_for_fields.password_easy
  }
  // 🧠 Rule 5: Sequential characters (abc, 123, etc.)
  else if (isSequential(lower)) {
    errors_to_response.password = error_for_fields.password_sequential
  }
}
