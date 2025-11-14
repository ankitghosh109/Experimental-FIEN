import express from "express"
import type { Request, Response, Application } from "express"
import cors from "cors"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import AuthRoutes from "../../3_interface_adapters/routes/AuthRoutes"

export default async function expressLoader(app: Application) {
  // 🔧 Basic middlewares
  app.use(express.json())
  app.use(cors({
    origin:process.env.FRONTEND_ORIGIN,
    credentials: true
  }))
  app.use(cookieParser(process.env.COOKIE_SECRET))
  const stream = {
    write: (message: string) => console.log(message.trim()),
  }
  app.use(morgan("dev", { stream }))

  // 🛣️ API Routes
  app.use("/api/v1/auth", AuthRoutes)

  // 🧱 Health check route
  app.get("/health", (req: Request, res: Response) =>
    res.status(200).send("✅ Server Healthy")
  )

  console.log("✅ Express initialized with routes and middlewares")
}
