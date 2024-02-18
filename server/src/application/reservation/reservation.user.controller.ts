import { Controller, Post, Delete, Body, Param } from '@nestjs/common';
import { Transactional } from '@nestjs-cls/transactional';

import { ReserveUseCase } from '@src/use-case';
import { BookReservationDto, CancelReservationDto } from '@core/dto';

@Controller({ path: '/api/user/reservations' })
export class ReservationUserController {
  constructor(private reserveUseCase: ReserveUseCase) {}

  @Transactional()
  @Post()
  async book(@Body() bookDto: BookReservationDto) {
    const { concertId, userId } = bookDto;
    const reservation = await this.reserveUseCase.reserve(concertId, userId);
    return {
      id: reservation.id,
      message: 'reserve concert success',
    };
  }

  @Transactional()
  @Delete(':reservationId')
  async cancel(@Param() param: CancelReservationDto) {
    await this.reserveUseCase.cancel(param.reservationId);
    return {
      id: param.reservationId,
      message: 'cancel reservation success',
    };
  }
}