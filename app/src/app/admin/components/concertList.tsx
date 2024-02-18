import { ConcertCardDetail } from "./concertCardDetail";

export function ConcertList() {
  return (
    <section className="flex flex-col gap-4 mt-8 items-center">
      <ConcertCardDetail />
      <ConcertCardDetail />
      <ConcertCardDetail />
      <ConcertCardDetail />
    </section>
  );
}
