import type { date_of_birth } from "../../../types/authController/registerReqBody.types"

// year, monthName, day
export function isDateValid(date_of_birth: date_of_birth) {
  const { year, month: monthName, day } = date_of_birth

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

export function isDateInFuture(date_of_birth: date_of_birth) {
  const { day, month, year } = date_of_birth

  // Convert month string to a number (e.g., "03" → 3)
  const monthIndex = Number(month) - 1 // JS months are 0-11

  const date = new Date(year, monthIndex, day)
  const now = new Date()

  return date > now
}
