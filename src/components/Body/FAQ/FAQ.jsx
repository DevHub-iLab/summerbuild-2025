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
                <span className="text-[#1E1E1E]">frequently asked </span>
                <span className="text-[#FA6B1C]">questions </span>
            </h1>
            <div className="flex w-full justify-around">
                {topics.map(topic => (
                    <h1
                        key={topic}
                        className={`mb-2.5 cursor-pointer text-[18px] font-semibold sm:mb-5 sm:text-[25px] md:mb-7.5 md:text-[30px] ${
                            active === topic
                                ? "text-[#1E1E1E]"
                                : "text-[#81BFDA]"
                        }`}
                        onClick={() => setActive(topic)}>
                        {topic}
                    </h1>
                ))}
            </div>
            <FAQTopic active={active} />
            <FAQExt
                header="Have a question that is not addressed above?"
                content={
                    <>
                        Feel free to reach out to us on our
                        <a
                            href="https://www.instagram.com/ntu.devhub/"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-linear-65 from-[#c0a0d4] via-[#ce8585] to-[#fcb045] bg-clip-text font-bold text-transparent underline">
                            {" "}
                            Instagram
                        </a>{" "}
                        page or email us at devhubilab[at]e.ntu.edu.sg.
                    </>
                }
            />
        </div>
    )
}
export default FAQ
