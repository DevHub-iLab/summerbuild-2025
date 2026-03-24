type ScheduleCardType = {
  color: string;
  fontWeight: string;
  header: string;
  content?: string;
  type: "week" | "event";
  icon?: string;
};

function ScheduleCard({
  color,
  fontWeight,
  header,
  content,
  type,
  icon,
}: ScheduleCardType) {
  const isWeek = type === "week";

  return (
    <div className="group relative flex w-full max-w-4xl items-center gap-4 md:gap-6">
      {/* Timeline dot */}
      <div className="absolute left-32 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-[#F6F3E7] bg-[#81BFDA] md:block" />

      {/* Left pill */}
      <div
        className={`relative z-20 flex min-h-15 w-42.5 shrink-0 items-center justify-center rounded-full px-4 text-center shadow-md transition-all duration-300 group-hover:scale-[1.03] md:w-55 ${
          isWeek ? "shadow-lg" : "shadow-sm"
        }`}
        style={{ backgroundColor: color || "transparent" }}
      >
        <h2
          className={`flex items-center gap-2 text-base md:text-xl ${
            isWeek ? "tracking-wide" : ""
          }`}
          style={{ fontWeight }}
        >
          {icon ? <span>{icon}</span> : null}
          <span>{header}</span>
        </h2>
      </div>

      {/* Right content card */}
      <div
  className={`min-h-15 flex-1 rounded-3xl px-5 py-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg ${
    isWeek
      ? "bg-[#F8F4E8] border border-[#E7DDC7] shadow-md"
      : "bg-white border border-[#D7EEF8] shadow-sm"
  }`}
>
  <p
    className={`text-sm md:text-lg ${
      isWeek
        ? "font-semibold text-[#2F2A24]"
        : "font-medium italic text-[#6B6B6B]"
    }`}
  >
    {content || ""}
  </p>
</div>
    </div>
  );
}

export default ScheduleCard;