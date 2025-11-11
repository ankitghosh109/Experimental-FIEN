import { model, Schema } from "mongoose"

const userSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    email: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    username: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    password: {
      type: Schema.Types.String,
      required: true,
       minLength: [8, "Must be at least 8 characters long."]
    },
    global_name: {
      type: Schema.Types.String,
      required: true
    },
    date_of_birth: {
      type: Schema.Types.Date,
      required: true,
    },
    created_at: {
      type:  Schema.Types.Date,
      required: true
    }
  },
  {
    strict: "throw",
  }
)

const UserModel = model("users", userSchema)

export default UserModel
