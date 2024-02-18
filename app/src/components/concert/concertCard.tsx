import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faTrash } from "@fortawesome/free-solid-svg-icons";

const mockDesc =
  "Lorem ipsum dolor sit amet consectetur. Elit purus nam gravida porttitor nibh urna sit ornare a. Proin dolor morbi id ornare aenean non. Fusce dignissim turpis sed non est orci sed in. Blandit ut purus nunc sed donec commodo morbi diam scelerisque.";

export function ConcertCard({
  name = "ConcertName",
  description = mockDesc,
  seat = 500,
  onDelete = () => {},
}) {
  return (
    <div className="flex flex-col flex-wrap gap-4 border-[1px] border-zinc-400 p-4 mb-4 max-w-[800px]">
      <h3 className="text-[#1692EC] text-2xl border-b-[1px] border-zinc-400">
        {name}
      </h3>
      <desc>{description}</desc>
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
  );
}
