import { Expose } from 'class-transformer';
import { IsString, IsNumber } from 'class-validator';

export class CreateConcertDto {
  @Expose()
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  seat: number;

  @IsNumber()
  createdById: number;
}
