import { useState } from "react";
import ScheduleCard from "./ScheduleCard";
import { ChevronDown } from "lucide-react";
import { scheduleData } from "../../data/ProgramScheduleData";
import scheduleImg from "../../assets/sb/teaching.svg";

function Schedule() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="schedule"
      className="relative mt-20 flex flex-col items-center px-6"
    >
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-bold uppercase text-2xl sm:text-3xl md:text-5xl">
          <span className="text-[#1E1E1E]">{scheduleData.scheduleHeader} </span>
          <span className="text-[#FA6B1C]">
            {scheduleData.scheduleHeaderOrange}
          </span>
        </h1>

        <p className="mt-4 text-sm font-medium text-black/70 sm:text-base md:text-lg">
          {scheduleData.scheduleSubtitle}
        </p>
      </div>

      {/* MOBILE VIEW */}
      <div className="mt-10 flex w-full max-w-md flex-col gap-4 md:hidden">
        {scheduleData.weeks.map((week, i) => {
          const isOpen = openIndex === i;

          return (
            <div
              key={i}
              className="overflow-hidden rounded-3xl border border-[#D7EEF8] bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between px-4 py-4 text-left"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg shadow-sm"
                    style={{ backgroundColor: week.color }}
                  >
                    {week.icon}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-[#1E1E1E]">
                      {week.weekTitle}
                    </h3>
                    {week.description ? (
                      <p className="mt-1 text-sm text-black/90 line-clamp-2">
                        {week.description}
                      </p>
                    ) : null}
                  </div>
                </div>

                <ChevronDown
                  className={`ml-3 h-5 w-5 shrink-0 text-[#1E1E1E] transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-[#EDF5FA] bg-[#F8FBFD] px-4 py-3">
                    {week.events.length > 0 ? (
                      <div className="flex flex-col gap-3">
                        {week.events.map((event, eventIndex) => (
                          <div
                            key={eventIndex}
                            className="rounded-2xl border border-[#D7EEF8] bg-white px-4 py-3"
                          >
                            <div className="flex items-start gap-3">
                              {event.icon ? (
                                <span className="text-lg">{event.icon}</span>
                              ) : null}

                              <div>
                                <p className="text-sm font-semibold text-[#1E1E1E]">
                                  {event.dateTitle}
                                </p>
                                <p className="mt-1 text-sm text-black/90">
                                  {event.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-black/50">
                        No fixed events listed for this week yet.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* DESKTOP VIEW */}
      <div className="relative mt-12 hidden w-full max-w-5xl md:block">
        <div className="absolute left-32 top-1/2 z-10 h-4 w-4 -translate-y-1/2 rounded-full border-4 border-[#F6F3E7] bg-[#FFB703]" />

        <div className="flex flex-col items-center gap-6 md:gap-8">
          {scheduleData.weeks.flatMap((week) => {
            const weekCard = [
              {
                color: week.color,
                fontWeight: "bold" as const,
                header: week.weekTitle,
                content: week.description,
                type: "week" as const,
                icon: week.icon,
              },
            ];

            const eventCards = week.events.map((event) => ({
              color: "#9EE7F5",
              fontWeight: "400" as const,
              header: event.dateTitle,
              content: event.description,
              type: "event" as const,
              icon: event.icon,
            }));

            return [...weekCard, ...eventCards];
          }).map((schObj, i) => (
            <ScheduleCard
              key={i}
              color={schObj.color}
              fontWeight={schObj.fontWeight}
              header={schObj.header}
              content={schObj.content}
              type={schObj.type}
              icon={schObj.icon}
            />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-14 w-full max-w-200 rounded-4xl bg-[#6FA9D1] px-6 py-6 shadow-lg">
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between md:gap-8">
          {/* Text */}
          <div className="text-center md:max-w-xl md:text-left">
            <h2 className="text-xl font-semibold text-black md:text-2xl">
              Ready to build through summer?
            </h2>
            <p className="mt-3 text-sm text-white md:text-lg">
              Mark these dates down and stay tuned for updates on workshops,
              sessions, and submission details.
            </p>
          </div>

          {/* SVG / image */}
          <div className="shrink-0">
            <img
              src={scheduleImg}
              alt="Penguins planning the schedule"
              className="h-auto w-36 md:w-44 lg:w-52"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Schedule;