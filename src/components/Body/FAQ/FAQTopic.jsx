import FAQCard from "./FAQCard.jsx"

function FAQTopic(props){
    
    return (
        <div>
          {props.active === "General" && (
            <div className="flex flex-col justify-center m-auto rounded-xl bg-[#81BFDA] md:w-[750px] sm:w-[600px] w-[400px]">
              <FAQCard
                question="Who can participate in SummerBuild 2025?"
                answer="SummerBuild 2025 is open to all CCDS students, no matter the study year or course! Join now and start building!"
              />
              <FAQCard question="Question" answer="Answer" />
              <FAQCard question="Question" answer="Answer" />
            </div>
          )}
    
          {props.active === "Registration" && (
            <div className="flex flex-col justify-center m-auto rounded-xl bg-[#81BFDA] md:w-[750px] sm:w-[600px] w-[400px]">
              <FAQCard
                question="How do I register for the event?"
                answer="Answer"
              />
              <FAQCard question="Question" answer="Answer" />
              <FAQCard question="Question" answer="Answer" />
            </div>
          )}
    
          {props.active === "Resources" && (
            <div className="flex flex-col justify-center m-auto rounded-xl bg-[#81BFDA] md:w-[750px] sm:w-[600px] w-[400px]">
              <FAQCard
                question="Where can I find event resources?"
                answer="Answer"
              />
              <FAQCard question="Question" answer="Answer" />
              <FAQCard question="Question" answer="Answer" />
            </div>
          )}
        </div>
      );
}

export default FAQTopic