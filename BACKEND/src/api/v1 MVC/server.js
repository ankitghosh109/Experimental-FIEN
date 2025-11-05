import express from "express"
import cors from "cors"
import authRoutes from "../3_interface_adapters/routes/authRoutes.js"
import { connectDB } from "../../../config/DBConnection.js"

import initLoaders from "./src/loaders/boot.js"

const startServer = async () => {
  const app = express()
  await initLoaders({ app })

  const PORT = process.env.PORT || 5000
  app.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`))
}

startServer()
