import mongooseLoader from "./mongooseLoader.js"
import expressLoader from "./expressLoader.js"
import type { Application} from "express"

export default async function initLoaders({ app }: {app: Application}) {
  // 🧠 2. Connect to MongoDB
  await mongooseLoader()

  // ⚙️ 3. Setup Express
  await expressLoader(app)

  console.log("🚀 All loaders initialized successfully")
}
