import ScheduleCard from "./ScheduleCard.jsx"
function Schedule() {
    return (
        <div id="schedule" className="flex flex-col mt-20 items-center">
            <h1 className="text-[#1E1E1E] uppercase justify-center text-center font-bold md:text-4xl sm:text-3xl text-2xl">
                Schedule
            </h1>
            <div className="absolute z-[-1] bg-[#C6C6C6] left-1/2 transform md:-translate-x-[155px] sm:-translate-x-[140px] -translate-x-[128px] w-1 md:h-[1300px] h-[1000px] mt-22"></div>
            <div className="flex flex-col items-center mt-5 w-auto">
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
