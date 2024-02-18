import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faTrash } from "@fortawesome/free-solid-svg-icons";

import { ConcertCard } from "@/components";

const mockDesc =
  "Lorem ipsum dolor sit amet consectetur. Elit purus nam gravida porttitor nibh urna sit ornare a. Proin dolor morbi id ornare aenean non. Fusce dignissim turpis sed non est orci sed in. Blandit ut purus nunc sed donec commodo morbi diam scelerisque.";

export function ConcertCardDetail({
  name = "ConcertName",
  description = mockDesc,
  seat = 500,
  onDelete = () => {},
}) {
  return (
    <ConcertCard>
      <div className="flex flex-col gap-4">
        <h3 className="text-[#1692EC] text-2xl border-b-[1px] border-zinc-400">
          {name}
        </h3>
        <p>{description}</p>
        <section className="flex justify-between items-center">
          <div>
            <FontAwesomeIcon icon={faPerson} />
            <span className="ml-2">{seat}</span>
          </div>
          <button className="bg-[#E84E4E] text-white p-2" onClick={onDelete}>
            <FontAwesomeIcon icon={faTrash} />
            <span className="ml-2">Delete</span>
          </button>
        </section>
      </div>
    </ConcertCard>
  );
}
