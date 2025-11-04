// domain/UserEntity.js
// --------------------
// This is the core domain entity representing a User. It contains only business data.
export default class User {
  constructor({
    _id,
    email,
    global_name,
    username,
    password,
    date_of_birth,
    created_At,
  }) {
    this._id = _id
    this.email = email
    this.global_name = global_name
    this.username = username
    this.password = password
    this.date_of_birth = date_of_birth
    this.created_at = created_At
  }
}
