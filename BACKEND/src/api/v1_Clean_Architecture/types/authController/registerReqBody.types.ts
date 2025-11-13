export type RegisterReqBody = {
  email: string
  global_name: string
  username: string
  password: string
  date_of_birth: {
    month: string
    day: number
    year: number
  }
}

export type date_of_birth = { day: number; month: string; year: number }