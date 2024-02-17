import { Module, Global } from '@nestjs/common';

import {
  CreateConcertUseCase,
  ShowConcertsUseCase,
  DeleteConcertUseCase,
} from '@use-case/index';

import { ConcertController } from './concert.controller';

@Global()
@Module({
  imports: [],
  providers: [ShowConcertsUseCase, CreateConcertUseCase, DeleteConcertUseCase],
  controllers: [ConcertController],
  exports: [],
})
export class ConcertModule {}
