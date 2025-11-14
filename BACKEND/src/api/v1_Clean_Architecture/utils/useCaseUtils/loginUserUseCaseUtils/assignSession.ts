import type { IUserRepository } from "../../../2_application/interfaces/IUserRepository"
import {
  getRedisClient,
  type MyRedisClient,
} from "../../../4_frameworks_drivers/loaders/singleton loaders/redisClient"

type SearchResult = {
  total: number
  documents: {
    id: string
    value: any
  }[]
}

export default async function assignSession(
  loginEmail: string,
  userRepository: IUserRepository
) {
  const QueryResult = await userRepository.findIdByEmail(loginEmail)

  if (!QueryResult) return null

  const redisClient: MyRedisClient = await getRedisClient()
  const allSessions = (await redisClient.ft.search(
    "userIdINDEX",
    `@userId:{${QueryResult._id.toString()}}`,{
      RETURN: []
    }
  )) as SearchResult

  console.log(allSessions);

  if (allSessions.total >= 3) {
    if (allSessions.documents[0]) {
      await redisClient.del(allSessions.documents[0].id)
    } else {
      return null
    }
  }

  const sessionId = crypto.randomUUID()
  const sessionExpiryTime = 1000 * 60 * 60 * 24 * 7

  const redisKey = `FIEN:session:${sessionId}`

  await redisClient
    .multi()
    .json.set(redisKey, "$", {
      userId: QueryResult._id.toString(),
    })
    .expire(redisKey, sessionExpiryTime / 1000)
    .exec()

  const cookieToSet = {
    name: "sid",
    value: sessionId,
    config: {
      httpOnly: true,
      signed: true,
      maxAge: sessionExpiryTime,
    },
  }

  return cookieToSet
}
