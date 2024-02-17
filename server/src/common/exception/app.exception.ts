import { HttpStatus } from '@nestjs/common';

import { BaseException, ExceptionDetail } from './base.exception';

export class AppException extends BaseException {
  constructor(
    { error, message }: ExceptionDetail,
    status: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR,
  ) {
    super({ error, message }, status);
  }

  static userNotFound(): AppException {
    return new AppException({ error: 'user not found' }, HttpStatus.NOT_FOUND);
  }
}
