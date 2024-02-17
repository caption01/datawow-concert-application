import { ConcertEntity } from '../entity';
import { CreateConcertDto } from '../dto';

export abstract class IConcertRepository {
  abstract findAll(): Promise<ConcertEntity[]>;

  abstract create(concert: CreateConcertDto): Promise<ConcertEntity>;
}
