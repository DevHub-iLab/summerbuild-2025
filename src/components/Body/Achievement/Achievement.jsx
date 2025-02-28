import AchievementCard from "./AchievementCard.jsx"

function Achievement(){
    return(
        <div className='flex flex-col mt-20'>
            <h1 className='uppercase justify-center text-center font-bold md:text-4xl sm:text-3xl text-2xl'> 
                <span className='text-[#1E1E1E]'>levels </span> 
                <span className='text-[#FA6B1C]'>of achievement</span>
            </h1>
            <div className='flex w-auto justify-center mt-5 mx-2'>
                <AchievementCard color='#B1F0F7' text='Achievement 1'/>
                <AchievementCard color='#B1F0F7' text='Achievement 2'/>
                <AchievementCard color='#B1F0F7' text='Achievement 3'/>
            </div>
        </div>
    )
}

export default Achievement