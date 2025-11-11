import { z } from "zod/v4"
import { error_for_fields } from "../../../../2_application/constants/errorConstants"
import { commonPasswords } from "../../../../2_application/constants/passwordConstants"
import {
  isDateInFuture,
  isDateValid,
} from "../../../../utils/formValidationUtils/dateValidationHelper"
import {
  isPasswordRepeatedPattern,
  isPasswordSequential,
} from "../../../../utils/formValidationUtils/passwordValidationHelper"

export const registerFormValidationSchema = z.object({
  email: z.email(),
  username: z.string(),
  global_name: z.string(),
  password: z.string().superRefine((password, context) => {
    const passwordLowerCased = password.toLowerCase()

    // 🧠 Rule 1: Too short
    if (password.length < 8) {
      context.addIssue({
        code: "custom",
        message: error_for_fields.password_small.message,
      })
      return
    }

    // 🧠 Rule 2: Common passwords
    if (commonPasswords.includes(passwordLowerCased)) {
      context.addIssue({
        code: "custom",
        message: error_for_fields.password_common.message,
      })
      return
    }

    // 🧠 Rule 3: All characters same or repeating pattern
    if (
      /^(.)(\1)+$/.test(passwordLowerCased) ||
      isPasswordRepeatedPattern(passwordLowerCased)
    ) {
      context.addIssue({
        code: "custom",
        message: error_for_fields.password_repeat.message,
      })
      return
    }

    // 🧠 Rule 4: Date-like patterns (e.g. 2000, 12-12-2000)
    if (
      /\b(19|20)\d{2}\b/.test(password) ||
      /\d{2}[./-]?\d{2}[./-]?\d{2,4}/.test(password)
    ) {
      context.addIssue({
        code: "custom",
        message: error_for_fields.password_easy.message,
      })
      return
    }

    // 🧠 Rule 5: Sequential characters (abc, 123, etc.)
    if (isPasswordSequential(passwordLowerCased)) {
      context.addIssue({
        code: "custom",
        message: error_for_fields.password_sequential.message,
      })
      return
    }
  }),
  date_of_birth: z
    .object({
      month: z.string(),
      day: z.number(),
      year: z.number(),
    })
    .superRefine((date_of_birth, context) => {
      if (!isDateValid(date_of_birth)) {
        context.addIssue({
          code: "custom",
          message: error_for_fields.date_of_birth_invalid.message,
        })
        return
      }

      if (isDateInFuture(date_of_birth)) {
        context.addIssue({
          code: "custom",
          message: error_for_fields.date_of_birth_future.message,
        })
        return
      }
    }),
})
