"use client";

import { useState } from "react";

import { api } from "@/services";

export const useConcertMeta = () => {
  const [meta, setMeta] = useState({
    seat: 0,
    reserve: 0,
    cancel: 0,
  });

  const fetch = async () => {
    const response = await api.get("/admin/concerts/meta");
    const data = response.data;
    setMeta({
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
