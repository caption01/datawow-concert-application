"use client";

import { useEffect, useState } from "react";
import { map } from "lodash";
import { toast } from "react-toastify";

import { ConcertCardDetail, ModalConfirm } from "@/components";

import { useConcerts } from "../hooks";

export function ConcertList({ metaRefresh }: { metaRefresh: () => void }) {
  const concerts = useConcerts();
  const [modal, setModel] = useState(false);
  const [targetId, setTarget] = useState(null);

  const concertLists = concerts.data;

  useEffect(() => {
    concerts.fetch();
  }, []);

  const toggle = () => {
    setModel(!modal);
  };

  const onCancel = () => {
    toggle();
    setTarget(null);
  };

  const onDelete = async () => {
    if (!targetId) return;

    await concerts.remove(targetId, {
      onSuccess: () => {
        toast("deleted success");
        metaRefresh();
      },
      onError: (msg: any) => toast(msg),
    });

    toggle();
  };

  return (
    <>
      <section className="flex flex-col gap-4 mt-8 items-center">
        {map(concertLists, (concert: any) => {
          return (
            <div key={concert.id} className="w-full">
              <ConcertCardDetail
                name={concert.name}
                seat={concert.seat}
                description={concert.description}
                onClick={() => {
                  toggle();
                  setTarget(concert?.id);
                }}
              />
            </div>
          );
        })}
      </section>
      <ModalConfirm show={modal} onConfirm={onDelete} onCancel={onCancel} />
    </>
  );
}
