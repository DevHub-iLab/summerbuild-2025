import { ChevronRight } from "lucide-react";
import { useState } from "react";

type FAQCardType = {
  question: string;
  answer: string | string[];
};

function FAQCard({ question, answer }: FAQCardType) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-all duration-300 ease-in-out ${
        open
          ? "border-[#9ED9F3] bg-[#fdfeff] shadow-md"
          : "border-transparent bg-white shadow-sm hover:shadow-md"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-3 px-5 py-4 text-left transition-all duration-300 sm:px-6 sm:py-5"
      >
        <ChevronRight
          size={22}
          className={`shrink-0 text-[#3A3A3A] transition-transform duration-300 ${
            open ? "rotate-90" : ""
          }`}
        />

        <p className="text-[15px] font-semibold text-[#1E1E1E] sm:text-[18px] md:text-[20px]">
          {question}
        </p>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 text-[13px] leading-relaxed text-[#3F4752] sm:px-6 sm:text-[15px] md:text-[17px]">
            {Array.isArray(answer) ? (
              answer.map((paragraph, index) => (
                <p key={index} className={index > 0 ? "mt-4" : ""}>
                  {paragraph}
                </p>
              ))
            ) : (
              <p>{answer}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQCard;