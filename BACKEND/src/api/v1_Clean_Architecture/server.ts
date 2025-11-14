import express from "express"
import initLoaders from "./4_frameworks_drivers/loaders/boot.js"

const startServer = async () => {
  const app = express()
  await initLoaders({ app })

  const PORT = process.env.PORT || 5000
  app.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`))
}

startServer()
