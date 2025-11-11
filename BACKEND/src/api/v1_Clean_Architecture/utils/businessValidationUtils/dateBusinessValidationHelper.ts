export function isUnderAge(date_of_birth: Date, minAge = 13) {
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
