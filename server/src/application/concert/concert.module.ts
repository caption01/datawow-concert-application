import { Module, Global } from '@nestjs/common';

import { CreateConcertUseCase } from '@use-case/index';

import { ConcertController } from './concert.controller';

@Global()
@Module({
  imports: [],
  providers: [CreateConcertUseCase],
  controllers: [ConcertController],
  exports: [],
})
export class ConcertModule {}
