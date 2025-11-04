import { error_for_fields } from "../constants/errorConstants.js"


export function dateGenerator(date_of_birth, errors_to_response) {
  if (
    !isValidDate(date_of_birth.year, date_of_birth.month, date_of_birth.day)
  ) {
    return (errors_to_response.date_of_birth =
      error_for_fields.date_of_birth_invalid)
  } else {
    const dobDate = new Date(
      Date.UTC(
        date_of_birth.year,
        new Date(`${date_of_birth.month} 1`).getMonth(),
        date_of_birth.day
      )
    )

    if (isFutureDate(dobDate)) {
      errors_to_response.date_of_birth = error_for_fields.date_of_birth_future
    } else if (!isUnderAge(dobDate, 13)) {
      errors_to_response.date_of_birth = error_for_fields.date_of_birth_underage
    } else {
      return dobDate
    }
  }
}

function isValidDate(year, monthName, day) {
  // convert month name → number
  const monthIndex = new Date(`${monthName} 1`).getMonth() // 0–11

  const date = new Date(Date.UTC(year, monthIndex, day))

  // now verify if it matches
  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === monthIndex &&
    date.getUTCDate() === day
  )
}

function isFutureDate(dateStr) {
  const date = new Date(dateStr)
  const now = new Date()
  return date > now
}

function isUnderAge(date_of_birth, minAge = 13) {
  const today = new Date()
  const birthDate = new Date(date_of_birth) // date_of_birth should be a Date object

  let age = today.getUTCFullYear() - birthDate.getUTCFullYear()
  const monthDiff = today.getUTCMonth() - birthDate.getUTCMonth()
  const dayDiff = today.getUTCDate() - birthDate.getUTCDate()

  // If birthday hasn’t occurred yet this year, subtract 1
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--
  }

  return age >= minAge
}
