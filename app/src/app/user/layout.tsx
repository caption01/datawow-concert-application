"use client";

import { useEffect, useContext } from "react";
import { useRouter } from "next/navigation";

import { UserContext } from "@/hooks";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { currentUser } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/");
    }
  }, []);

  return <div>{children}</div>;
}
