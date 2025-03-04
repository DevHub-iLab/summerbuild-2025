import ThemeCard from './ThemeCard.jsx'

function Theme(){
    return(
        <div className='flex flex-col mt-20 items-center'>
            <h1 className='uppercase justify-center text-center font-bold md:text-4xl sm:text-3xl text-2xl'> 
                <span className='text-[#1E1E1E]'>themes </span> 
                <span className='text-[#FA6B1C]'>available</span>
            </h1>
            <div className='mt-3 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1000px] justify-items-center'>
                <ThemeCard color='#B1F0F7' text='Theme 1'/>
                <ThemeCard color='#FADA7A' text='Theme 2'/>
                <ThemeCard color='#F5F0CD' text='Theme 3'/>
                <ThemeCard color='#81BFDA' text='Theme 4'/>
            </div>
        </div>
    )
}

export default Theme