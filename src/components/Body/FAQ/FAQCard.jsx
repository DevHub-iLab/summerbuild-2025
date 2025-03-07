import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

function FAQCard(props) {
    const [arrow, setArrow] = useState(false);

    const handleArrow = () => {
        setArrow(!arrow);
    };

    return (
        <div className="flex flex-col rounded-xl md:text-[25px] sm:text-[20px] text-[15px] bg-white m-3 px-5 py-3 transition-all duration-300 ease-in-out">
            <div className="flex items-center cursor-pointer" onClick={handleArrow}>
                <div className="md:h-[25px] sm:h-[18px] h-[15px] pr-1 transition-transform duration-300">
                    {!arrow ? <IoIosArrowForward size="auto" /> : <IoIosArrowDown size="auto" />}
                </div>
                <p className="font-semibold">{props.question}</p>
            </div>

            <div className={`overflow-hidden transition-max-height duration-300 ease-in-out ${arrow ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="md:text-[18px] sm:text-[15px] text-[13px] md:ml-[30px] sm:ml-[25px] ml-[20px] pt-2">
                    {props.answer}
                </p>
            </div>
        </div>
    );
}

export default FAQCard;