import { Controller, Post } from '@nestjs/common';
import { Transactional } from '@nestjs-cls/transactional';

import {} from '@src/use-case';

@Controller({ path: '/api/user/reservations' })
export class ReservationUserController {
  constructor() {}

  @Transactional()
  @Post()
  async book(): Promise<any> {
    return {};
  }

  @Transactional()
  @Post()
  async cancel(): Promise<any> {
    return {};
  }
}
