import { ConcertCard, Icons } from "@/components";

const mockDesc =
  "Lorem ipsum dolor sit amet consectetur. Elit purus nam gravida porttitor nibh urna sit ornare a. Proin dolor morbi id ornare aenean non. Fusce dignissim turpis sed non est orci sed in. Blandit ut purus nunc sed donec commodo morbi diam scelerisque.";

const ACTIONS: Record<string, any> = {
  DELETE: {
    title: "Delete",
    icon: "trash",
  },
  CANCEL: {
    title: "Cancel",
    icon: null,
  },
  RESERVE: {
    title: "Reserve",
    icon: null,
  },
};

function getActionProps(action: string) {
  return ACTIONS?.[action] || ACTIONS["DELETE"];
}

export function ConcertCardDetail({
  name = "ConcertName",
  description = mockDesc,
  seat = 500,
  action = "DELETE",
  onClick = () => {},
}) {
  const actionProps = getActionProps(action);
  return (
    <ConcertCard>
      <div className="flex flex-col gap-4">
        <h3 className="text-[#1692EC] text-2xl border-b-[1px] border-zinc-400">
          {name}
        </h3>
        <p>{description}</p>
        <section className="flex justify-between items-center">
          <div>
            {actionProps.icon && <Icons i={"human"} size={18} fill="black" />}
            <span className="ml-2">{seat}</span>
          </div>
          <button
            className="bg-[#E84E4E] text-white p-2 w-[120px]"
            onClick={onClick}
          >
            {actionProps.icon && <Icons i={actionProps.icon} />}
            {actionProps.title && <span>{actionProps.title}</span>}
          </button>
        </section>
      </div>
    </ConcertCard>
  );
}
