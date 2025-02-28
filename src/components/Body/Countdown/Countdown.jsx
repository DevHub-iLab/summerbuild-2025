import Timer from './Timer.jsx'

// dateTime Format "YYYY-MM-DDTHH:MM:SS"
function Countdown(){


    return(
        <div className='pt-10 flex flex-col items-center w-auto'>
            <Timer timer="Registration Timer" targetDate="2025-05-24T00:00:00"/>
            <Timer timer="Event Timer" targetDate="2025-05-26T00:00:00"/>
            <button className='bg-[#81BFDA] text-[#1E1E1E] font-bold uppercase rounded-md mt-6 mx-auto p-3 px-5'>Sign up now!</button>
        </div>
    )
}

export default Countdown