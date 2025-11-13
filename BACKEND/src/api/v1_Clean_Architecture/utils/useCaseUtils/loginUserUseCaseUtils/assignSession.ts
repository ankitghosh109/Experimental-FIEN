import type { IUserRepository } from "../../../2_application/interfaces/IUserRepository"
import { getRedisClient } from "../../../4_frameworks_drivers/loaders/redisClient"

function assignSession(userRepository: IUserRepository) {
      const redisClient = await getRedisClient()

    userRepository.findIdByEmail(senitizedData.login)

    const allSessions = await redisClient.ft.search(
      "userIdINDEX",
      `@userId:{${}}`
    )

    if (allSessions.total >= 2) {
    await redisClient.del(allSessions.documents[0].id)
  }

  const sessionId = crypto.randomUUID()
  const  sessionExpiryTime = 1000 *60 *60 *24 * 7

  const redisKey = `FIEN:session:${sessionId}`

  await redisClient.multi().json.set(redisKey, "$", {
    userId:user._id,
  }).expire(redisKey, sessionExpiryTime /1000).exec()
    }