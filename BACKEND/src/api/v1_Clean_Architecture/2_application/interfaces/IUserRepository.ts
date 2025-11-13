import type { Document, Types } from "mongoose"
import type UserEntity from "../../1_domain/entities/UserEntity"

export interface IUserRepository {
  save(user: UserEntity): void
  findByEmail(email: string): Promise< Document | null>
  findPassByEmail(email: string): Promise< {password: string} | null>
  findIdByEmail(email:string): Promise<{_id: Types.ObjectId} | null>
  doesExists(searchQuery: object): Promise<{_id: Types.ObjectId} | null>
}
