import { createClient } from "redis"

let redisClient: ReturnType<typeof createClient> | null = null

export async function getRedisClient() {
  if (!redisClient) {
    redisClient = createClient()

    redisClient.on("error", (err) => {
      console.error("❌ Redis Client Error:", err)
      process.exit(1)
    })

    await redisClient.connect()
    console.log("✅ Redis connected (singleton)")
  }

  return redisClient
}

process.on("SIGINT", async () => {
  redisClient?.quit();
  console.log("🤯 Redis Disconnected!");
  process.exit(0);
});