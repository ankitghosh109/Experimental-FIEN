import mongoose from "mongoose"
import { connectDB } from "./DBConnection"

const mongoose = await connectDB()
const client = mongoose.connection.getClient()

try {
  const db = mongoose.connection.db
} catch (error) {
  console.log(err)
}
