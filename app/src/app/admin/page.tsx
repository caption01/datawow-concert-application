"use client";

import { useState, useEffect } from "react";

import { ConcertMeta } from "@/components";

import { Tabs, ConcertList, ConcertForm } from "./components";
import { useConcertMeta } from "./hooks";

export default function AdminDashboard() {
  const [tab, setTab] = useState("OVERVIEW");
  const meta = useConcertMeta();

  const refreshMeta = () => {
    meta.fetch();
  };

  useEffect(() => {
    meta.fetch();
  }, []);

  return (
    <main className="mx-auto max-w-[1200px] px-8">
      <div className="grid grid-cols-3 gap-8 my-8 justify-around sm:grid-rows-1 sm:grid-cols-none">
        <ConcertMeta
          bgColor="sky"
          title="Total of seats"
          icon="human"
          count={meta?.data?.seat}
        />
        <ConcertMeta
          bgColor="green"
          title="Reserve"
          icon="award"
          count={meta?.data?.reserve}
        />
        <ConcertMeta
          bgColor="rose"
          title="Cancel"
          icon="xCircle"
          count={meta?.data?.cancel}
        />
      </div>
      <div>
        <Tabs currentTab={tab} onTabSelect={setTab} />
        {tab === "OVERVIEW" && <ConcertList metaRefresh={refreshMeta} />}
        {tab === "CREATE" && <ConcertForm metaRefresh={refreshMeta} />}
      </div>
    </main>
  );
}
