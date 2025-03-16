import ChallengeCard from './ChallengeCard.jsx'

function Challenge(){
    return(
        <div className='flex flex-col mt-20 items-center'>
            <h1 className='uppercase justify-center text-center font-bold md:text-4xl sm:text-3xl text-2xl'> 
                <span className='text-[#1E1E1E]'>SPECIAL </span> 
                <span className='text-[#FA6B1C]'>PRIZES</span>
            </h1>
            <div className='mt-3 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1000px] justify-items-center'>
                <ChallengeCard color='#B1F0F7' text='Best UI/UX'/>
                <ChallengeCard color='#FADA7A' text='Most Innovative Build'/>
                <ChallengeCard color='#F5F0CD' text='Most Useful Build'/>
                <ChallengeCard color='#81BFDA' text='Best Freshmen Build'/>
            </div>
        </div>
    )
}

export default Challenge