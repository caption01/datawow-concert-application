"use client";

import { ToastContainer } from "react-toastify";

import { UserProvider } from "@/hooks";

export function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserProvider>
      <div>{children}</div>
      <ToastContainer autoClose={3000} />
    </UserProvider>
  );
}
