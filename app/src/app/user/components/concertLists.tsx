"use client";

import { useEffect } from "react";
import { map } from "lodash";
import { toast } from "react-toastify";

import { ConcertCardDetail } from "@/components";

import { useUserConcerts } from "../hooks";

export function ConcertList({ user }: { user: any }) {
  const { data, fetch, reserve, cancel } = useUserConcerts();

  const refresh = () => {
    fetch(user?.id);
  };

  const onReserve = async (concert: any) => {
    await reserve(concert?.id, user?.id, {
      onSuccess: () => {
        toast("Reservred success");
        refresh();
      },
      onError: (msg) => toast(msg),
    });
  };

  const onCancel = async (concert: any) => {
    await cancel(concert?.reservationId, {
      onSuccess: () => {
        toast("Cancel success");
        refresh();
      },
      onError: (msg) => toast(msg),
    });
  };

  useEffect(() => {
    fetch(user?.id);
  }, []);

  return (
    <section className="flex flex-col gap-4 mt-8 items-center">
      {map(data, (concert: any) => {
        const action = concert?.isReserved ? "CANCEL" : "RESERVE";
        const onClick = concert?.isReserved ? onCancel : onReserve;
        return (
          <div key={concert.id} className="w-full">
            <ConcertCardDetail
              name={concert.name}
              seat={concert.seat}
              description={concert.description}
              action={action}
              onClick={() => onClick(concert)}
            />
          </div>
        );
      })}
    </section>
  );
}
