"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { UserProvider } from "@/hooks";

export function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <UserProvider>{children}</UserProvider>;
}
