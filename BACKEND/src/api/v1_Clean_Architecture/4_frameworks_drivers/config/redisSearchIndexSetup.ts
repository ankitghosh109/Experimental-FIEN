import { SCHEMA_FIELD_TYPE } from "redis"
import { getRedisClient } from "../loaders/singleton loaders/redisClient"

const redisClient = await getRedisClient()

await redisClient.ft.create(
  "userIdINDEX",
  {
    "$.userId": { type: SCHEMA_FIELD_TYPE.TAG, AS: "userId" },
  },
  {
    ON: "JSON",
    PREFIX: "FIEN:session:",
  }
)

redisClient.quit()