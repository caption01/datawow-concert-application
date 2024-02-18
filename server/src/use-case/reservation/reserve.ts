import { Injectable } from '@nestjs/common';

import {
  IConcertRepository,
  IUserRepository,
  IReservationRepository,
} from '@src/core/repository';

import {} from '@src/core/entity';

@Injectable()
export class ReserveUseCase {
  constructor(
    private concertRepo: IConcertRepository,
    private userRepo: IUserRepository,
    private reservationRepo: IReservationRepository,
  ) {}
}
