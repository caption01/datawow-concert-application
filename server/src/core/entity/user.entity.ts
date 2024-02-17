import { Role as RolePrisma } from '@prisma/client';

export class UserEntity {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  role: RolePrisma;

  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
