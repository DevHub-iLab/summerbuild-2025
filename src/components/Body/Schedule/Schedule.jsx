import ScheduleCard from "./ScheduleCard.jsx"

function Schedule() {
    return (
        <div id="schedule" className="mt-20 flex flex-col items-center">
            <h1 className="justify-center text-center text-2xl font-bold uppercase sm:text-3xl md:text-4xl">
                <span className="text-[#1E1E1E]">Programme </span>
                <span className="text-[#FA6B1C]">Schedule</span>
            </h1>
            <div className="absolute left-1/2 z-[-1] mt-22 h-[600px] w-1 -translate-x-[128px] transform bg-[#C6C6C6] sm:-translate-x-[140px] md:h-[600px] md:-translate-x-[155px]"></div>
            <div className="mt-5 flex w-auto flex-col items-center">
                <ScheduleCard
                    color="#81BFDA"
                    fontWeight="bold"
                    header="WEEK 1"
                />
                <ScheduleCard
                    color="#B1F0F7"
                    fontWeight="400"
                    header="26 May"
                    content="Opening Ceremony"
                />
                <ScheduleCard
                    color="#B1F0F7"
                    fontWeight="400"
                    header="27-31 May"
                    content={`Various Workshops`}
                />
                <ScheduleCard
                    color="#81BFDA"
                    fontWeight="bold"
                    header="WEEK 2-4"
                    content={`Check-in Sessions with Mentors`}
                />
                <ScheduleCard
                    color="#81BFDA"
                    fontWeight="bold"
                    header="WEEK 5"
                />
                <ScheduleCard
                    color="#B1F0F7"
                    fontWeight="400"
                    header="26 June"
                    content="Project Submission"
                />
                <ScheduleCard
                    color="#B1F0F7"
                    fontWeight="400"
                    header="27 June"
                    content={`Judging & Closing Ceremony`}
                />
            </div>
        </div>
    )
}

export default Schedule
