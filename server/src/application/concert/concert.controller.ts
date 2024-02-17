import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { Transactional } from '@nestjs-cls/transactional';

import {
  CreateConcertUseCase,
  ShowConcertsUseCase,
  DeleteConcertUseCase,
} from '@src/use-case';
import { CreateConcertDto, DeleteConcertDto } from '@src/core/dto';

@Controller({ path: '/api/concerts' })
export class ConcertController {
  constructor(
    private showConcertsUseCase: ShowConcertsUseCase,
    private createConcertUseCase: CreateConcertUseCase,
    private deleteConcertUseCase: DeleteConcertUseCase,
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

  @Transactional()
  @Delete(':id')
  async deleteConcert(@Param() params: DeleteConcertDto): Promise<any> {
    const targetId = params.id;
    const deletedItem = await this.deleteConcertUseCase.delete(targetId);
    return {
      id: deletedItem.id,
      message: 'deleted success',
    };
  }
}
