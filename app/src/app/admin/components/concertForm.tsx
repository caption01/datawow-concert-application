import { ConcertCardForm } from "./concertCardForm";

export function ConcertForm() {
  const handleSubmit = (formData: any) => {
    console.log("create with", formData);
  };

  return (
    <section className="mt-8">
      <ConcertCardForm onSubmit={handleSubmit} />
    </section>
  );
}
