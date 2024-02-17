import { Injectable } from '@nestjs/common';

import { IConcertRepository } from '@src/core/repository';
import { ConcertEntity } from '@src/core/entity';
import { AppException } from '@src/common';

@Injectable()
export class DeleteConcertUseCase {
  constructor(private concertRepo: IConcertRepository) {}

  async findConcert(concertId: number): Promise<ConcertEntity> {
    return this.concertRepo.findById(concertId);
  }

  async delete(concertId: number): Promise<ConcertEntity> {
    const concert = await this.findConcert(concertId);

    if (!concert) {
      throw AppException.concertNotFound();
    }

    return this.concertRepo.deleteById(concertId);
  }
}
