import { Controller, Post, Body } from '@nestjs/common';
import { Transactional } from '@nestjs-cls/transactional';

import { CreateConcertUseCase } from '@src/use-case';
import { CreateConcertDto } from '@src/core/dto';

@Controller({ path: '/api/concerts' })
export class ConcertController {
  constructor(private createConcertUseCase: CreateConcertUseCase) {}

  @Transactional()
  @Post()
  async createConcert(@Body() concertDto: CreateConcertDto): Promise<any> {
    const newConcert = await this.createConcertUseCase.create(concertDto);
    return {
      id: newConcert.id,
      message: 'created success',
    };
  }
}
