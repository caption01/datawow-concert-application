"use client";

import { useState, useEffect } from "react";

import { ConcertMeta } from "@/components";

import { Tabs, ConcertList, ConcertForm } from "./components";
import { useConcertMeta } from "./hooks";

export default function AdminDashboard() {
  const [tab, setTab] = useState("OVERVIEW");
  const meta = useConcertMeta();

  useEffect(() => {
    meta.fetch();
  }, []);

  return (
    <main className="mx-auto max-w-[1200px] px-8">
      <div className="grid grid-cols-3 gap-4 my-8 justify-around">
        <ConcertMeta
          bgColor="sky"
          title="Total of seats"
          count={meta?.data?.seat}
        />
        <ConcertMeta
          bgColor="green"
          title="Reserve"
          count={meta?.data?.reserve}
        />
        <ConcertMeta bgColor="rose" title="Cancel" count={meta?.data?.cancel} />
      </div>
      <div>
        <Tabs currentTab={tab} onTabSelect={setTab} />
        {tab === "OVERVIEW" && <ConcertList />}
        {tab === "CREATE" && <ConcertForm />}
      </div>
    </main>
  );
}
