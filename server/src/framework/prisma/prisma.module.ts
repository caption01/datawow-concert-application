import { Module, Global } from '@nestjs/common';

import { IUserRepository, IConcertRepository } from '@core/repository';

import { PrismaService } from './prisma.service';
import { UserRepository, ConcertRepository } from './repository';

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
    PrismaService,
  ],
  exports: [IUserRepository, IConcertRepository, PrismaService],
})
export class PrismaModule {}
