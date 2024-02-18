"use client";

import { useEffect } from "react";
import { map } from "lodash";
import { toast } from "react-toastify";

import { ConcertCardDetail } from "./concertCardDetail";

import { useConcerts } from "../hooks";

export function ConcertList() {
  const concerts = useConcerts();

  const concertLists = concerts.data;

  useEffect(() => {
    concerts.fetch();
  }, []);

  const onDelete = async (concertId: number) => {
    await concerts.remove(concertId, {
      onSuccess: () => toast("deleted success"),
      onError: (msg: any) => toast(msg),
    });
  };

  return (
    <section className="flex flex-col gap-4 mt-8 items-center">
      {map(concertLists, (concert: any) => {
        return (
          <div key={concert.id} className="w-full">
            <ConcertCardDetail
              name={concert.name}
              seat={concert.seat}
              description={concert.description}
              onDelete={() => onDelete(concert.id)}
            />
          </div>
        );
      })}
    </section>
  );
}
