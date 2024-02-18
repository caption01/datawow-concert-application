import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPerson } from "@fortawesome/free-solid-svg-icons";

const bgColorVariants: Record<string, string> = {
  sky: "bg-[#0070A4]",
  green: "bg-[#00A58B]",
  rose: "bg-[#E84E4E]",
};

export function ConcertMeta({
  bgColor = "sky",
  icon = faPerson,
  title = "title",
  count = 0,
}) {
  return (
    <div
      className={`${bgColorVariants[bgColor]} w-full max-w-80 p-4 text-white`}
    >
      <div className="flex flex-col text-center">
        <div>
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className="text-xl">{title}</div>
        <div className="text-4xl">{count}</div>
      </div>
    </div>
  );
}
