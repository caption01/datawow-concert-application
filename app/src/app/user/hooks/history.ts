"use client";

import { useState } from "react";

import { api } from "@/services";

export const useUserReserveHistory = () => {
  const [history, setHistory] = useState<any[]>([]);

  const fetch = async (userId: number) => {
    const response = await api.get(`/user/reservations?userId=${userId}`);
    const data = response.data;
    setHistory(data);
  };

  return {
    data: history,
    fetch: fetch,
  };
};
