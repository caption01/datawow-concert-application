"use client";

import { useEffect } from "react";

import { ConcertHistoryTable } from "../components";
import { useReserveHistory } from "../hooks";

export default function AdminHistoryDashboard() {
  const { data, fetch } = useReserveHistory();

  useEffect(() => {
    fetch();
  }, []);

  return (
    <main className="max-w-[1000px] mx-auto m-8">
      <ConcertHistoryTable history={data} />
    </main>
  );
}
