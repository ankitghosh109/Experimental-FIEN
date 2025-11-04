import express from "express"
import cors from "cors"
import morgan from "morgan"
import authRoutes from "../api/v1/routes/authRoutes.js"

export default async function expressLoader(app) {
  // 🔧 Basic middlewares
  app.use(express.json())
  app.use(cors())
  app.use(morgan("dev"))

  // 🛣️ API Routes
  app.use("/api/v1/auth", authRoutes)

  // 🧱 Health check route
  app.get("/health", (req, res) => res.status(200).send("✅ Server Healthy"))

  console.log("✅ Express initialized with routes and middlewares")
}
