import FAQCard from "./FAQCard.jsx"

function FAQTopic(props) {
    return (
        <div>
            {props.active === "General" && (
                <div className="m-auto flex w-[325px] flex-col justify-center rounded-xl bg-[#81BFDA] sm:w-[600px] md:w-[750px]">
                    <FAQCard
                        question="Who can participate in SummerBuild 2025?"
                        answer="SummerBuild 2025 is open to all CCDS students, no matter the study year or course! Join now and start building!"
                    />
                    <FAQCard question="Question" answer="Answer" />
                    <FAQCard question="Question" answer="Answer" />
                </div>
            )}

            {props.active === "Registration" && (
                <div className="m-auto flex w-[325px] flex-col justify-center rounded-xl bg-[#81BFDA] sm:w-[600px] md:w-[750px]">
                    <FAQCard
                        question="How do I register for the event?"
                        answer="Answer"
                    />
                    <FAQCard question="Question" answer="Answer" />
                    <FAQCard question="Question" answer="Answer" />
                </div>
            )}

            {props.active === "Resources" && (
                <div className="m-auto flex w-[325px] flex-col justify-center rounded-xl bg-[#81BFDA] sm:w-[600px] md:w-[750px]">
                    <FAQCard
                        question="Where can I find event resources?"
                        answer="Answer"
                    />
                    <FAQCard question="Question" answer="Answer" />
                    <FAQCard question="Question" answer="Answer" />
                </div>
            )}
        </div>
    )
}

export default FAQTopic
