const activeTabVariants = "text-[#1692EC] border-[#1692EC] border-b-2";

export function Tabs({
  currentTab,
  onTabSelect,
}: {
  currentTab: string;
  onTabSelect: (tab: string) => void;
}) {
  const onSelect = (tab: string) => {
    onTabSelect(tab);
  };

  return (
    <section className="flex gap-4 ">
      <div
        className={`${currentTab === "OVERVIEW" && activeTabVariants} px-2`}
        onClick={() => onSelect("OVERVIEW")}
      >
        Overview
      </div>
      <div
        className={`${currentTab === "CREATE" && activeTabVariants} px-2`}
        onClick={() => onSelect("CREATE")}
      >
        Create
      </div>
    </section>
  );
}
