import { ChevronRight, ChevronDown } from "lucide-react"
import { useState } from "react"

function FAQCard(props) {
    const [arrow, setArrow] = useState(false)

    const handleArrow = () => {
        setArrow(!arrow)
    }

    return (
        <div className="m-3 flex flex-col rounded-xl bg-white p-3 text-[15px] transition-all duration-300 ease-in-out sm:text-[20px] md:text-[25px]">
            <div
                className="flex cursor-pointer items-center"
                onClick={handleArrow}>
                <div>
                    {!arrow ? (
                        <ChevronRight size="2rem" />
                    ) : (
                        <ChevronDown size="2rem" />
                    )}
                </div>
                <p className="font-semibold">{props.question}</p>
            </div>

            <div
                className={`transition-max-height overflow-hidden duration-300 ease-in-out ${
                    arrow ? "opacity-100" : "max-h-0 opacity-0"
                }`}>
                <p className="ml-[20px] pt-2 text-[13px] sm:ml-[25px] sm:text-[15px] md:ml-[30px] md:text-[18px]">
                    {props.answer}
                </p>
            </div>
        </div>
    )
}

export default FAQCard
