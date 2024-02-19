"use client";

import { useState } from "react";

import { api } from "@/services";

export const useUserConcerts = () => {
  const [concerts, setConcerts] = useState<any[]>([]);

  const fetch = async (userId: number) => {
    const response = await api.get(`/user/concerts?userId=${userId}`);
    const data = response.data;
    setConcerts(data);
  };

  const reserve = async (
    concertId: number,
    userId: number,
    { onSuccess = () => {}, onError = (msg: string) => {} }
  ) => {
    try {
      await api.post("/user/reservations", {
        concertId: concertId,
        userId: userId,
      });
      onSuccess?.();
    } catch (error: any) {
      onError?.(error?.errorMsg);
    }
  };

  const cancel = async (
    reservationId: number,
    { onSuccess = () => {}, onError = (msg: string) => {} }
  ) => {
    try {
      await api.delete(`/user/reservations/${reservationId}`);
      onSuccess?.();
    } catch (error: any) {
      onError?.(error?.errorMsg);
    }
  };

  return {
    data: concerts,
    fetch: fetch,
    reserve: reserve,
    cancel: cancel,
  };
};
