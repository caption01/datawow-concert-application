import { Icons } from "@/components";
import { faPerson } from "@fortawesome/free-solid-svg-icons";

const bgColorVariants: Record<string, string> = {
  sky: "bg-[#0070A4]",
  green: "bg-[#00A58B]",
  rose: "bg-[#E84E4E]",
};

export function ConcertMeta({
  bgColor = "sky",
  icon = "human",
  title = "title",
  count = 0,
}) {
  return (
    <div className={`${bgColorVariants[bgColor]} w-full p-4 text-white`}>
      <div className="flex flex-col text-center gap-4">
        <div>
          <Icons i={icon} size={40} />
        </div>
        <div className="text-xl">{title}</div>
        <div className="text-4xl">{count}</div>
      </div>
    </div>
  );
}
