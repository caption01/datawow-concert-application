import { Injectable } from '@nestjs/common';

import { IConcertRepository, IUserRepository } from '@src/core/repository';
import { CreateConcertDto } from '@src/core/dto';
import { ConcertEntity, UserEntity } from '@src/core/entity';
import { AppException } from '@src/common';

@Injectable()
export class CreateConcertUseCase {
  constructor(
    private concertRepo: IConcertRepository,
    private userRepo: IUserRepository,
  ) {}

  async findAdmin(userId: number): Promise<UserEntity> {
    return this.userRepo.findById(userId);
  }

  async create(concertDto: CreateConcertDto): Promise<ConcertEntity> {
    const adminId = await this.findAdmin(concertDto.createdById);

    if (!adminId) {
      throw AppException.userNotFound();
    }

    return this.concertRepo.create(concertDto);
  }
}
