"use client";

import { useContext } from "react";
import { UserContext } from "@/hooks";
import { ConcertList } from "./components";

export default function UserDashboard() {
  const userContext = useContext(UserContext);

  return (
    <main className="mx-auto max-w-[1200px] px-8">
      <div>
        <ConcertList user={userContext.currentUser} />
      </div>
    </main>
  );
}
