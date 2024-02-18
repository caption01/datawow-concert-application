"use client";

import { useState, useEffect } from "react";
import { filter } from "lodash";

import { api } from "@/services";

export const useConcertMeta = () => {
  const [meta, setMeat] = useState({
    seat: 0,
    reserve: 0,
    cancel: 0,
  });

  const fetch = async () => {
    const response = await api.get("/admin/concerts/meta");
    const data = response.data;
    setMeat({
      seat: data?.totalSeat,
      reserve: data?.totalReserve,
      cancel: data?.totalCancel,
    });
  };

  return {
    data: meta,
    fetch: fetch,
  };
};

export const useConcerts = () => {
  const [concerts, setConcerts] = useState<any[]>([]);

  const fetch = async () => {
    const response = await api.get("/admin/concerts");
    const data = response.data;
    setConcerts(data);
  };

  const remove = async (
    concertId: number,
    {
      onSuccess,
      onError,
    }: { onSuccess: () => void; onError: (msg: string) => void }
  ) => {
    try {
      await api.delete(`/admin/concerts/${concertId}`);

      setConcerts((prevConcerts) =>
        filter(prevConcerts, (con) => con?.id !== concertId)
      );

      onSuccess?.();
    } catch (error: any) {
      onError?.(error?.errorMsg);
    }
  };

  const create = async (
    admin: any,
    concertData: any,
    {
      onSuccess,
      onError,
    }: { onSuccess: () => void; onError: (msg: string) => void }
  ) => {
    try {
      const response = await api.post(`/admin/concerts`, {
        name: concertData.name,
        description: concertData.description,
        seat: parseInt(concertData.seat),
        createdById: admin?.id,
      });
      const newConcert = response.data;

      setConcerts((prevConcerts) => [...prevConcerts, newConcert]);

      onSuccess?.();
    } catch (error: any) {
      onError?.(error?.errorMsg);
    }
  };

  return {
    data: concerts,
    fetch: fetch,
    remove: remove,
    create: create,
  };
};
