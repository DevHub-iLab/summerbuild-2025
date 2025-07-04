import { Eye } from "lucide-react"
import Timer from "./Timer.jsx"
import { View } from "lucide-react"

// dateTime Format "YYYY-MM-DDTHH:MM:SS"
function Countdown() {
    return (
        <div className="flex w-auto flex-col items-center pt-10">
            {/*26 May 2025, 10am*/}
            <div className="text-dh-grey-200 my-5 flex w-[70%] flex-col items-center rounded-md bg-[#FADA7A] p-5">
                <h2 className="mb-4 text-center text-xl font-bold sm:text-3xl">
                    SummerBuild 2025 is over!
                </h2>
                <p className="text-center text-lg font-semibold">
                    Thank you for participating! We hope you had a great time
                    building your projects and learning new skills with us!
                </p>
                <a
                    className="bg-dh-orange hover:bg-dh-orange/80 mt-4 flex flex-col justify-between gap-2 rounded-xl px-4 py-1 font-semibold text-white md:py-2"
                    href="https://go.ilabccds.com/sb25_devpost"
                    target="_blank">
                    <div className="flex flex-row items-center gap-4">
                        <Eye size={24} />
                        View the submitted projects on DevPost!
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Countdown
