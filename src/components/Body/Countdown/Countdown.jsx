import Timer from "./Timer.jsx"

// dateTime Format "YYYY-MM-DDTHH:MM:SS"
function Countdown() {
    return (
        <div className="flex w-auto flex-col items-center pt-10">
            {/*26 May 2025, 10am*/}
            <Timer
                timer="Final Submission in.."
                targetDate="2025-06-26T11:00:00"
            />
        </div>
    )
}

export default Countdown
