import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';

import { AppConfigService } from '@common/config/config.service';

import { AppModule } from './app.module';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(AppConfigService);

  await app.listen(configService.getPort());
}
bootstrap();
