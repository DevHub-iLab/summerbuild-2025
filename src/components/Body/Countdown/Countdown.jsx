import Timer from "./Timer.jsx"

// dateTime Format "YYYY-MM-DDTHH:MM:SS"
function Countdown() {
    return (
        <div className="flex w-auto flex-col items-center pt-10">
            {/*26 May 2025, 10am*/}
            <Timer timer="Event Timer" targetDate="2025-05-26T10:00:00" />
            <button className="mx-auto mt-6 rounded-md bg-[#81BFDA] p-3 px-5 font-bold text-[#1E1E1E] uppercase">
                Sign up now!
            </button>
        </div>
    )
}

export default Countdown
