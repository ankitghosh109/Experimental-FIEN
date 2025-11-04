export const types_of_errors = {
  Invalid_body_form: {
    code: 11000,
    message: "Invalid Body Form",
  },
  something_went_wrong: {
    code: "INTERNAL_SERVER_ERROR",
    message: "something went wrong",
  },
}

export const error_for_fields = {
  email_taken: {
    code: "EMAIL_ALREADY_REGISTERED",
    message: "Email is already registered.",
  },
  username_taken: {
    code: "USERNAME_ALREADY_TAKEN",
    message:
      "Username is unavailable. Try adding numbers, letters, underscores _ , or periods.",
  },
  date_of_birth_invalid: {
    code: "DATE_OF_BIRTH_INVALID",
    message: "Please enter a valid date of birth",
  },
  date_of_birth_underage: {
    code: "DATE_OF_BIRTH_UNDERAGE",
    message: "You need to be 13 or older in order to use Discord.",
  },
  date_of_birth_future: {
    code: "DATE_OF_BIRTH_FUTURE",
    code: "date of birth can't be future",
  },
  password_small: {
    code: "PASSWORD_REQUIREMENTS_MIN_LENGTH",
    message: "Must be at least 8 characters long.",
  },
  password_easy: {
    code: "PASSWORD_ZXCVBN_DATES_ARE_OFTEN_EASY_TO_GUESS",
    message: "Too weak: don\u2019t use easily guessable dates.",
  },
  password_common: {
    code: "PASSWORD_ZXCVBN_COMMON_PASSWORD",
    message:
      "Too common: password is too similar to a very commonly used password.",
  },
  password_repeat: {
    code: "PASSWORD_ZXCVBN_REPEATS_ARE_EASY_TO_GUESS",
    message:
      "Too weak: don\u2019t use easily guessable repeats like \u2018aaa\u2019 or \u2018abcabcabc\u2019.",
  },
  password_sequential: {
    code: "PASSWORD_ZXCVBN_SEQUENCES_LIKE_ABC_ARE_EASY_TO_GUESS",
    message:
      "Too weak: don\u2019t use easily guessable sequences like \u2018abc\u2019 or \u20186543\u2019.",
  },
}
