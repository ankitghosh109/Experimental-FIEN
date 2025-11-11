import express from "express"
import cors from 'cors'
import authRoutes from "./routes/authRoutes.js"
import { connectDB } from "./config/DBConnection.js"

const app = express()

await connectDB()

app.use(cors())

app.use(express.json())

app.use("/api/v1/auth", authRoutes)

app.listen(5000, () => {
  console.log(`Server Started`)
})