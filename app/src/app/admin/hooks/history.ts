"use client";

import { useState } from "react";

import { api } from "@/services";

export const useReserveHistory = () => {
  const [history, setHistory] = useState<any[]>([]);

  const fetch = async () => {
    const response = await api.get("/admin/reservations");
    const data = response.data;
    setHistory(data);
  };

  return {
    data: history,
    fetch: fetch,
  };
};
