import { Injectable } from '@nestjs/common';
import { TransactionHost } from '@nestjs-cls/transactional';
import { TransactionalAdapterPrisma } from '@nestjs-cls/transactional-adapter-prisma';

import { ConcertEntity } from '@src/core/entity';
import { IConcertRepository } from '@src/core/repository';

import { ConcertMapper } from '../mapper';

@Injectable()
export class UserRepository implements IConcertRepository {
  constructor(private txHost: TransactionHost<TransactionalAdapterPrisma>) {}

  async create(concert: ConcertEntity): Promise<ConcertEntity> {
    const newConcert = await this.txHost.tx.concert.create({
      data: {
        name: concert.name,
        description: concert.description,
        seat: concert.seat,
        createdById: concert.createdById,
      },
    });
    return ConcertMapper.toEntity(newConcert);
  }
}
