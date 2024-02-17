import { UserEntity } from '../entity';

export abstract class IUserRepository {
  abstract create(user: UserEntity): Promise<UserEntity>;
}
