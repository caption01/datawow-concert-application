"use client";

import { useEffect, useContext } from "react";

import { UserContext } from "@/hooks";

import { ConcertHistoryTable } from "../components";
import { useUserReserveHistory } from "../hooks";

export default function UserHistoryDashboard() {
  const userContext = useContext(UserContext);
  const { data, fetch } = useUserReserveHistory();

  const refresh = async () => {
    const userId = userContext.currentUser?.id;

    if (userId) {
      await fetch(userId);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <main className="max-w-[1000px] mx-auto m-8">
      <ConcertHistoryTable history={data} />
    </main>
  );
}
