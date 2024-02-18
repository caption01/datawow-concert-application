export function ConcertList({
  show,
  children,
}: {
  show: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4 mt-8 items-center">
      {show && children}
    </section>
  );
}
