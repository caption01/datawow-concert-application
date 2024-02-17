import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  async getHello(): Promise<any> {
    return {
      message: 'app running',
    };
  }
}
