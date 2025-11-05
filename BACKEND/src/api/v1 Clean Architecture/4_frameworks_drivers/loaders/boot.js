import mongooseLoader from "./mongooseLoader.js"
import expressLoader from "./expressLoader.js"

export default async function initLoaders({ app }) {
  // 🧠 2. Connect to MongoDB
  await mongooseLoader()

  // ⚙️ 3. Setup Express
  await expressLoader(app)

  console.log("🚀 All loaders initialized successfully")
}
