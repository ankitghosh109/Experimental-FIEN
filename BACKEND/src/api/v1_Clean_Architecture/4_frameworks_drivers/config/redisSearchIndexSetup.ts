import { SCHEMA_FIELD_TYPE } from "redis";
import { getRedisClient } from "../loaders/redisClient";

const redisClient = await getRedisClient()

redisClient.ft.create(
    "userIdINDEX",
    {
        userId: {
            type: SCHEMA_FIELD_TYPE.TAG
        },
        
    },
    {
        ON: "JSON",
        PREFIX:"FIEN:session:"
    }
)