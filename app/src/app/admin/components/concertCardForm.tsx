import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faTrash } from "@fortawesome/free-solid-svg-icons";

import { ConcertCard } from "@/components";

export function ConcertCardForm({
  onSubmit,
}: {
  onSubmit: (data: any) => void;
}) {
  const handleSubmit = (event: any) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const name = formData.get("concertName");
    const seat = formData.get("concertSeat");
    const description = formData.get("concertDescription");

    onSubmit({
      name,
      seat,
      description,
    });

    form.reset();
  };

  return (
    <ConcertCard>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <h3 className="text-[#1692EC] text-2xl border-b-[1px] border-zinc-400">
          Create
        </h3>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block mb-2" htmlFor="concertName">
              Concert Name
            </label>
            <input
              className="border rounded p-2 text-gray-700 w-full"
              type="text"
              required
              id="concertName"
              name="concertName"
              placeholder="Please input concert name"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-2" htmlFor="concertSeat">
              Total of seat
            </label>
            <div className="relative">
              <input
                className="border rounded p-2 text-gray-700 w-full"
                type="number"
                min={1}
                required
                id="concertSeat"
                name="concertSeat"
                placeholder="Please input total of seat"
              />
              <FontAwesomeIcon
                className="absolute inset-y-[50%] right-[12px] translate-y-[-50%]"
                icon={faPerson}
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <label className="block mb-2" htmlFor="concertDescription">
            Description
          </label>
          <input
            className="border rounded p-2 text-gray-700 w-full"
            type="text"
            required
            id="concertDescription"
            name="concertDescription"
            placeholder="Please input description"
          />
        </div>
        <div className="self-end">
          <input type="submit" />
        </div>
      </form>
    </ConcertCard>
  );
}
