import { Module, Global } from '@nestjs/common';

import {
  IUserRepository,
  IConcertRepository,
  IReservationRepository,
} from '@core/repository';

import { PrismaService } from './prisma.service';
import {
  UserRepository,
  ConcertRepository,
  ReservationRepository,
} from './repository';

@Global()
@Module({
  imports: [],
  providers: [
    {
      provide: IUserRepository,
      useClass: UserRepository,
    },
    {
      provide: IConcertRepository,
      useClass: ConcertRepository,
    },
    {
      provide: IReservationRepository,
      useClass: ReservationRepository,
    },
    PrismaService,
  ],
  exports: [
    IUserRepository,
    IConcertRepository,
    IReservationRepository,
    PrismaService,
  ],
})
export class PrismaModule {}
