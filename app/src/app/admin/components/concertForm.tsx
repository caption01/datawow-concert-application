"use client";

import { useContext } from "react";
import { toast } from "react-toastify";

import { UserContext } from "@/hooks";

import { ConcertCardForm } from "./concertCardForm";
import { useConcerts } from "../hooks";

export function ConcertForm({ afterCreated }: { afterCreated: () => void }) {
  const user = useContext(UserContext);
  const concert = useConcerts();

  const handleSubmit = async (formData: any) => {
    const admin = user.currentUser;
    await concert.create(admin, formData, {
      onSuccess: () => {
        toast("create success");
        afterCreated();
      },
      onError: (errorMsg: string) => {
        toast(errorMsg);
      },
    });
  };

  return (
    <section className="mt-8">
      <ConcertCardForm onSubmit={handleSubmit} />
    </section>
  );
}
