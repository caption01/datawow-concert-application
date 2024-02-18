export function ConcertCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-[1px] border-zinc-400 p-8 mb-4 rounded">
      {children}
    </div>
  );
}
