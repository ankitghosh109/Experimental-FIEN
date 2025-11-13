export function isUnderAge(
  date_of_birth: { month: string; day: number; year: number },
  minAge = 13
) {
  const today = new Date()

  const monthIndex = new Date(`${date_of_birth.month} 1, ${date_of_birth.year}`).getMonth()
  const birthDate = new Date(date_of_birth.year, monthIndex, date_of_birth.day)

  let age = today.getUTCFullYear() - birthDate.getUTCFullYear()
  const monthDiff = today.getUTCMonth() - birthDate.getUTCMonth()
  const dayDiff = today.getUTCDate() - birthDate.getUTCDate()

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--
  }

  return age <= minAge
}
