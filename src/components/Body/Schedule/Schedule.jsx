import ScheduleCard from "./ScheduleCard.jsx"
function Schedule(){
    return(
        <div id='schedule' className='flex flex-col mt-20 items-center'>
            <h1 className='text-[#1E1E1E] uppercase justify-center text-center font-bold md:text-4xl sm:text-3xl text-2xl'>
                Schedule</h1>
            <div className='absolute z-[1] bg-[#C6C6C6] left-1/2 transform -translate-x-[115px] w-1 h-[1100px] mt-22'></div>
            <div className='flex flex-col items-center mt-5 w-auto'>
                <ScheduleCard color='#81BFDA' fontWeight='bold' header='WEEK 1'/>
                <ScheduleCard color='#B1F0F7' fontWeight='400' header='26 May' content='Opening Ceremony'/>
                <ScheduleCard color='#B1F0F7' fontWeight='400' header='27 May' content='HTML/CSS Workshop'/>
                <ScheduleCard color='#B1F0F7' fontWeight='400' header='28 May' content='React Workshop'/>
                <ScheduleCard color='#B1F0F7' fontWeight='400' header='29 May' content='Express Workshop'/>
                <ScheduleCard color='#81BFDA' fontWeight='bold' header='WEEK 2-4' content={`Hacking Period\nCheck-in Sessions`}/>
                <ScheduleCard color='#81BFDA' fontWeight='bold' header='WEEK 5'/>
                <ScheduleCard color='#B1F0F7' fontWeight='400' header='26 June' content='Final Hacking Period'/>
                <ScheduleCard color='#B1F0F7' fontWeight='400' header='27 June' content={`Judging\nClosing Ceremony`}/>
            </div>
        </div>
    )

}

export default Schedule