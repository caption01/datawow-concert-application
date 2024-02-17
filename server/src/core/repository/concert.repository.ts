import { ConcertEntity } from '../entity';

export abstract class IConcertRepository {
  abstract create(concert: ConcertEntity): Promise<ConcertEntity>;
}
