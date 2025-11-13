import type { date_of_birth } from "../../types/authController/registerReqBody.types"

export function dateGenerator(date_of_birth: date_of_birth) {
  const dobDate = new Date(
    Date.UTC(
      date_of_birth.year,
      new Date(`${date_of_birth.month} 1`).getMonth(),
      date_of_birth.day
    )
  )
  return dobDate
}
