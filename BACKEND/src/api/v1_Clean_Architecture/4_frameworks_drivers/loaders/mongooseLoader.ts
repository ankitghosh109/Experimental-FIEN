import mongoose from "mongoose"

export default async function mongooseLoader() {
  try {
    const connected = await mongoose.connect(process.env.MONGODB_URL!)
    console.log(`✅ MongoDB Connected: ${connected.connection.host}`)
  } catch (error) { 
    console.error("❌ MongoDB Connection Error:", error)
    process.exit(1)
  }
}

process.on("SIGINT", async () => {
  mongoose.disconnect()
    console.log("Database Disconnected");
    process.exit(0)
})