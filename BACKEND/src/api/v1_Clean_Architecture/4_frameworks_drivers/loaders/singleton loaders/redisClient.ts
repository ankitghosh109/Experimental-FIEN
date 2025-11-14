import { createClient } from "redis"

export type MyRedisClient = ReturnType<typeof createClient>

let redisClient: MyRedisClient | null = null

export async function getRedisClient(): Promise<MyRedisClient> {
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
  redisClient?.quit()
  console.log("🤯 Redis Disconnected!")
  process.exit(0)
})
