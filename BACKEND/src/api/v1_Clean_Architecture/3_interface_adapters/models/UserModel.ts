import { model, Schema } from "mongoose"
import bcrypt from "bcrypt"

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
      minLength: [8, "Must be at least 8 characters long."],
    },
    global_name: {
      type: Schema.Types.String,
      required: true,
    },
    date_of_birth: {
      type: Schema.Types.Date,
      required: true,
    },
    created_at: {
      type: Schema.Types.Date,
      required: true,
    },
  },
  {
    strict: "throw",
  }
)

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next()
  this.password = await bcrypt.hash(this.password, 12)
  next()
})



const UserModel = model("users", userSchema)

export default UserModel
