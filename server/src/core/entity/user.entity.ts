import { Role } from '../enum';

export class UserEntity {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  role: Role;

  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
