import ScheduleCard from "./ScheduleCard";
import { scheduleData } from "../../data/ProgramScheduleData";

function Schedule() {
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

        <p className="mt-4 text-sm font-medium text-[#6F6F6F] sm:text-base md:text-lg">
          {scheduleData.scheduleSubtitle}
        </p>
      </div>

      {/* Timeline container */}
      <div className="relative mt-12 w-full max-w-5xl">
        {/* Vertical line */}
        <div className="absolute left-32 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-[#F6F3E7] bg-[#FFB703] md:block" />

        <div className="flex flex-col gap-6 md:gap-8 items-center">
          {scheduleData.allSchedules.map((schObj, i) => (
            <ScheduleCard
              key={i}
              color={schObj.color}
              fontWeight={schObj.fontWeight}
              header={schObj.dateTitle}
              content={schObj.description}
              type={schObj.type}
              icon={schObj.icon}
            />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-14 w-full max-w-3xl rounded-4xl bg-[#6FA9D1] px-6 py-8 text-center text-white shadow-lg">
        <h2 className="text-xl text-black font-semibold md:text-2xl">
          Ready to build through summer?
        </h2>
        <p className="mt-3 text-sm md:text-lg">
          Mark these dates down and stay tuned for updates on workshops,
          sessions, and submission details.
        </p>
      </div>
    </section>
  );
}

export default Schedule;