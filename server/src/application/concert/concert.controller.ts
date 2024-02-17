import { Controller, Post } from '@nestjs/common';

import { CreateConcertUseCase } from '@src/use-case';

@Controller({ path: '/api/concerts' })
export class ConcertController {
  constructor(private createConcertUseCase: CreateConcertUseCase) {}

  @Post()
  async createConcert(): Promise<any> {
    return this.createConcertUseCase.create();
  }
}
