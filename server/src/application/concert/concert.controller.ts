import { Controller, Post, Body, Get } from '@nestjs/common';
import { Transactional } from '@nestjs-cls/transactional';

import { CreateConcertUseCase, ShowConcertsUseCase } from '@src/use-case';
import { CreateConcertDto } from '@src/core/dto';

@Controller({ path: '/api/concerts' })
export class ConcertController {
  constructor(
    private showConcertsUseCase: ShowConcertsUseCase,
    private createConcertUseCase: CreateConcertUseCase,
  ) {}

  @Transactional()
  @Get()
  async showConcerts(): Promise<any> {
    return this.showConcertsUseCase.getAllConcerts();
  }

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
