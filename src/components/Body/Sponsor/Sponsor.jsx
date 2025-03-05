import SponsorCard from "./SponsorCard"

function Sponsor(){
    return(
        <div className='flex flex-col mt-20 items-center'>
            <h1 className='text-[#1E1E1E] uppercase justify-center text-center font-bold md:text-4xl sm:text-3xl text-2xl'>sponsors</h1>
            <h1 className='text-[#FA6B1C] mt-5 uppercase justify-center text-center font-bold italic md:text-4xl sm:text-3xl text-2xl'>gold sponsors</h1>
            <div className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1000px] justify-items-center'>
                <SponsorCard color='#B1F0F7' text='Sponsor 1'/>
                <SponsorCard color='#B1F0F7' text='Sponsor 2'/>
            </div>
            <h1 className='text-[#FA6B1C] mt-15 uppercase justify-center text-center font-bold italic md:text-4xl sm:text-3xl text-2xl'>venue sponsors</h1>
            <div className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1000px] justify-items-center'>
                <SponsorCard color='#B1F0F7' text='Sponsor 1'/>
                <SponsorCard color='#B1F0F7' text='Sponsor 2'/>
            </div>
        </div>
    )
}

export default Sponsor