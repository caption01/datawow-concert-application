import { Module, Global } from '@nestjs/common';

import {
  CreateConcertUseCase,
  ShowConcertsUseCase,
  DeleteConcertUseCase,
  MetaDataConcert,
} from '@use-case/index';

import { ConcertAdminController } from './concert.admin.controller';

@Global()
@Module({
  imports: [],
  providers: [
    ShowConcertsUseCase,
    CreateConcertUseCase,
    DeleteConcertUseCase,
    MetaDataConcert,
  ],
  controllers: [ConcertAdminController],
  exports: [],
})
export class ConcertModule {}
