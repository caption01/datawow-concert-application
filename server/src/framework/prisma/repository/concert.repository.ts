import { Injectable } from '@nestjs/common';
import { TransactionHost } from '@nestjs-cls/transactional';
import { TransactionalAdapterPrisma } from '@nestjs-cls/transactional-adapter-prisma';
import { map } from 'lodash';

import { IConcertRepository } from '@src/core/repository';
import { CreateConcertDto } from '@src/core/dto';
import { ConcertEntity } from '@src/core/entity';

import { ConcertMapper } from '../mapper';

@Injectable()
export class ConcertRepository implements IConcertRepository {
  constructor(private txHost: TransactionHost<TransactionalAdapterPrisma>) {}

  async findAll(): Promise<ConcertEntity[]> {
    const allConcerts = await this.txHost.tx.concert.findMany();
    return map(allConcerts, ConcertMapper.toEntity);
  }

  async create(concert: CreateConcertDto): Promise<ConcertEntity> {
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
