import ScheduleCard from "./ScheduleCard";

import { scheduleData } from "../../data/ProgramScheduleData";

function Schedule() {
  return (


    <div id="schedule" className="mt-20 flex flex-col items-center">
      <h1 className="justify-center text-center text-2xl font-bold uppercase sm:text-3xl md:text-4xl">
        <span className="text-[#1E1E1E]">{scheduleData.scheduleHeader} </span>
        <span className="text-[#FA6B1C]">{scheduleData.scheduleHeaderOrange}</span>
      </h1>

      <div className="absolute left-1/2 z-[-1] mt-22 h-[600px] w-1 -translate-x-[128px] transform bg-[#C6C6C6] sm:-translate-x-[140px] md:h-[600px] md:-translate-x-[155px]"></div>
      <div className="mt-5 flex w-auto flex-col items-center">
      {scheduleData.allSchedules.map((schObj,i) => {
          return <ScheduleCard key={i} color={schObj.color} fontWeight={schObj.fontWeight} header={schObj.dateTitle} content={schObj.description} />
      }
                                    )}
      </div>
    </div>
  );
}

export default Schedule;
