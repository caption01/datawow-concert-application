"use client";

import { useState, useEffect } from "react";

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
