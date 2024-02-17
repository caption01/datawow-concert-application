import { UserEntity } from '../entity';

export abstract class IUserRepository {
  abstract create(user: any): Promise<UserEntity>;
}
