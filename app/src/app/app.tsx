"use client";

import { UserProvider } from "@/hooks";

export function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <UserProvider>{children}</UserProvider>;
}
