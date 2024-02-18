import { Injectable } from '@nestjs/common';

import { IConcertRepository } from '@src/core/repository';

type MetaData = {
  totalSeat: number;
  totalReserve: number;
  totalCancel: number;
};

@Injectable()
export class MetaDataConcert {
  constructor(private concertRepo: IConcertRepository) {}

  async countConcertSeat(): Promise<number> {
    const tx = await this.concertRepo.getTx();

    const aggregations = await tx.aggregate({
      _sum: {
        seat: true,
      },
    });

    return aggregations._sum.seat;
  }

  async countTotalReserve(): Promise<number> {
    return 0;
  }

  async countTotalCancel(): Promise<number> {
    return 0;
  }

  async getMetaData(): Promise<MetaData> {
    const totalSeat = await this.countConcertSeat();
    const totalReserve = await this.countTotalReserve();
    const totalCancel = await this.countTotalCancel();

    return {
      totalSeat: totalSeat,
      totalReserve: totalReserve,
      totalCancel: totalCancel,
    };
  }
}
