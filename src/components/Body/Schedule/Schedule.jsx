import ScheduleCard from "./ScheduleCard.jsx"
function Schedule() {
    return (
        <div id="schedule" className="mt-20 flex flex-col items-center">
            <h1 className="justify-center text-center text-2xl font-bold text-[#1E1E1E] uppercase sm:text-3xl md:text-4xl">
                Schedule
            </h1>
            <div className="absolute left-1/2 z-[-1] mt-22 h-[1000px] w-1 -translate-x-[128px] transform bg-[#C6C6C6] sm:-translate-x-[140px] md:h-[1300px] md:-translate-x-[155px]"></div>
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
                    header="27 May"
                    content={`AM: HTML/CSS/JS Workshop\nPM: React Workshop`}
                />
                <ScheduleCard
                    color="#B1F0F7"
                    fontWeight="400"
                    header="28 May"
                    content={`AM: Express/Backend Workshop\nPM: Git Workshop`}
                />
                <ScheduleCard
                    color="#81BFDA"
                    fontWeight="bold"
                    header="WEEK 2-4"
                    content={`Building Period\nCheck-in Sessions`}
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
                    content="Final Building Period"
                />
                <ScheduleCard
                    color="#B1F0F7"
                    fontWeight="400"
                    header="27 June"
                    content={`Judging\nClosing Ceremony`}
                />
            </div>
        </div>
    )
}

export default Schedule
