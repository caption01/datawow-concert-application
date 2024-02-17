import { Injectable } from '@nestjs/common';

import { IConcertRepository } from '@src/core/repository';

@Injectable()
export class CreateConcertUseCase {
  constructor(private concertRepo: IConcertRepository) {}

  async create(): Promise<any> {
    return {};
  }
}
