"use client";

import { useState } from "react";

import { ConcertMeta, ConcertCard } from "@/components";

import { Tabs, ConcertList } from "./components";

export default function AdminDashboard() {
  const [tab, setTab] = useState("OVERVIEW");

  return (
    <main className="m-8">
      <div className="grid grid-cols-3 gap-4 justify-between my-8">
        <ConcertMeta bgColor="sky" />
        <ConcertMeta bgColor="green" />
        <ConcertMeta bgColor="rose" />
      </div>
      <div>
        <Tabs currentTab={tab} onTabSelect={setTab} />
        <ConcertList show={tab === "OVERVIEW"}>
          <ConcertCard />
          <ConcertCard />
          <ConcertCard />
          <ConcertCard />
        </ConcertList>
      </div>
    </main>
  );
}
