import { ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";

type FAQCardType = {
  question: string;
  answer: string | string[];
};

function FAQCard(props: FAQCardType) {
  const [arrow, setArrow] = useState(false);

  const handleArrow = () => {
    setArrow(!arrow);
  };

  return (
    <div className="m-3 flex cursor-pointer flex-col rounded-xl bg-white p-3 text-[15px] transition-all duration-300 ease-in-out sm:text-[20px] md:text-[25px]">
      <div className="flex items-center" onClick={handleArrow}>
        <div>
          {!arrow ? <ChevronRight size="2rem" /> : <ChevronDown size="2rem" />}
        </div>
        <p className="!cursor-pointer font-semibold">{props.question}</p>
      </div>

      <div
        className={`transition-max-height cursor-pointer overflow-hidden duration-300 ease-in-out ${
          arrow ? "opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="ml-[20px] pt-2 text-[13px] sm:ml-[25px] sm:text-[15px] md:ml-[30px] md:text-[18px]">
    {Array.isArray(props.answer) ? (  // Handle if the answer is an array
          props.answer.map((paragraph, index) => (
            <p key={index} className={index > 0 ? "mt-4" : ""}>
              {paragraph}
            </p>
          ))
        ) : (
          <p>{props.answer}</p>
        )}
        </div>
      </div>
    </div>
  );
}

export default FAQCard;
