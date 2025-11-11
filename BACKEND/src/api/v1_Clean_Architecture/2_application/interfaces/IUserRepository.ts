import type { Types } from "mongoose"
import type UserEntity from "../../1_domain/entities/UserEntity"

export interface IUserRepository {
  save(user: UserEntity): void
  findByEmail(email: string): Promise<void | null>
  doesExists(searchQuery: object): Promise<{_id: Types.ObjectId} | null>
}
