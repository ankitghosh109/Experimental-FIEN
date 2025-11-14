import mongooseLoader from "./mongooseLoader.js"
import expressLoader from "./expressLoader.js"
import type { Application} from "express"
import dotenvLoader from "./dotenvLoader.js"
import { getRedisClient } from "./singleton loaders/redisClient.js"

export default async function initLoaders({ app }: {app: Application}) {
  dotenvLoader()
  // 🧠 2. Connect to MongoDB
  await mongooseLoader()

await getRedisClient()
  // ⚙️ 3. Setup Express
  await expressLoader(app)
  console.log("🚀 All loaders initialized successfully")
}
