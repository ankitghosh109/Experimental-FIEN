import type { Types } from "mongoose"

export default class UserEntity {
   #_id 
   #email
   #global_name
   #username
   #password
   #date_of_birth
   #created_at

  constructor({
    _id,
    email,
    global_name,
    username,
    password,
    date_of_birth,
    created_at,
  } : {
    _id : Types.ObjectId
    email: string
    global_name: string 
    username: string
    password : string 
     date_of_birth : Date 
     created_at : Date
  }) {
    this.#_id = _id
    this.#email = email
    this.#global_name = global_name
    this.#username = username
    this.#password = password
    this.#date_of_birth = date_of_birth
    this.#created_at = created_at
  }
}
