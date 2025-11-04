import mongoose from "mongoose"

export async function connectDB() {
  try {
     await mongoose.connect(
      "mongodb://admin:admin@127.0.0.1:27017/FIEN?replicaSet=myReplica&authSource=admin"
    )
    console.log("Database connected")
  } catch (err) {  
    console.log(err)
    console.log("could not connect to the database")
    process.exit(1)
  }
}

process.on("SIGINT", async () => {
  mongoose.disconnect()
    console.log("Database Disconnected");
    process.exit(0)
})
