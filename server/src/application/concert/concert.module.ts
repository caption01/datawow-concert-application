import { Module, Global } from '@nestjs/common';

import { CreateConcertUseCase, ShowConcertsUseCase } from '@use-case/index';

import { ConcertController } from './concert.controller';

@Global()
@Module({
  imports: [],
  providers: [ShowConcertsUseCase, CreateConcertUseCase],
  controllers: [ConcertController],
  exports: [],
})
export class ConcertModule {}
