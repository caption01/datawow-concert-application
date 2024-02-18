import { Module } from '@nestjs/common';

import { ReserveUseCase } from '@use-case/index';

import { ReservationUserController } from './reservation.user.controller';

@Module({
  imports: [],
  providers: [ReserveUseCase],
  controllers: [ReservationUserController],
  exports: [],
})
export class ReservationModule {}
