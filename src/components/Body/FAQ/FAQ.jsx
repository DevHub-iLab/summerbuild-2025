import { useState } from "react"
import FAQTopic from "./FAQTopic.jsx"
import FAQExt from "./FAQExt.jsx"

function FAQ() {
    const [active, setActive] = useState("General")
    const topics = ["General", "Registration", "Resources"]

    const handleClick = item => {
        setActive(item)
    }

    return (
        <div id="faq" className="mt-20 flex flex-col">
            <h1 className="mb-5 justify-center text-center text-2xl font-bold uppercase sm:mb-7.5 sm:text-3xl md:mb-10 md:text-4xl">
                <span className="text-[#FA6B1C]">frequently </span>
                <span className="text-[#1E1E1E]">asked questions </span>
            </h1>
            <div className="mx-10 flex w-auto justify-center">
                {topics.map(topic => (
                    <h1
                        key={topic}
                        className={`mx-3 mb-2.5 cursor-pointer text-[18px] font-semibold sm:mx-10 sm:mb-5 sm:text-[25px] md:mx-15 md:mb-7.5 md:text-[30px] ${
                            active === topic
                                ? "text-[#1E1E1E]"
                                : "text-[#81BFDA]"
                        }`}
                        onClick={() => setActive(topic)}
                    >
                        {topic}
                    </h1>
                ))}
            </div>
            <FAQTopic active={active} />
            <FAQExt
                header="Have a question that is not addressed above?"
                content="Email devhubilab@e.ntu.edu.sg and have your queries answered!"
            />
        </div>
    )
}
export default FAQ
