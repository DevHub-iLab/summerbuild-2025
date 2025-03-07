import Timer from './Timer.jsx'

// dateTime Format "YYYY-MM-DDTHH:MM:SS"
function Countdown(){


    return(
        <div className='pt-10 flex flex-col items-center w-auto'>
            {/*26 May 2025, 10am*/}
            <Timer timer="Event Timer" targetDate="2025-05-26T10:00:00"/>
            <button className='bg-[#81BFDA] text-[#1E1E1E] font-bold uppercase rounded-md mt-6 mx-auto p-3 px-5'>Sign up now!</button>
        </div>
    )
}

export default Countdown