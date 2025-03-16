import FAQCard from "./FAQCard.jsx"

function FAQTopic(props){
    
    return (
        <div>
          {props.active === "General" && (
            <div className="flex flex-col justify-center m-auto rounded-xl bg-[#81BFDA] md:w-[750px] sm:w-[600px] w-[325px]">
              <FAQCard
                question="Who can participate in SummerBuild 2025?"
                answer="SummerBuild is open to NTU students from all faculties."
              />
              <FAQCard question="Why are all the workshops in person?" answer="Our workshops are designed to be interactive and hands-on. From our experience, in-person sessions create a more focused learning environment where participants can actively participate, ask questions, and network with peers. " />
              <FAQCard question="What are Check-In sessions?" answer="Between the Opening and Closing Ceremony, we will have Check-In sessions for different groups to meet and network. This gives you an opportunity to learn from other groups and exchange ideas, experiences and best practices." />
              <FAQCard question="Do I need to be present for the opening and closing ceremonies?" answer="Yes, attendance is compulsory as we will be giving out merchandise during both opening and closing ceremonies. Furthermore, there will be a science-fair style judging during the closing ceremony for us to assign the levels of achievement to the groups, as well as award the special prizes."/>
              <FAQCard question="Do I need to know software development?" answer="Nope! SummerBuild is meant for beginners with completely no experience. Come join us and pick up software development skills!"/>
            </div>
          )}
    
          {props.active === "Registration" && (
            <div className="flex flex-col justify-center m-auto rounded-xl bg-[#81BFDA] md:w-[750px] sm:w-[600px] w-[325px]">
              <FAQCard
                question="How do I register for the event?"
                answer="Every member in the group must register individually and put the same team name in the form (case sensitive). Please appoint a group leader for your group."
              />
              <FAQCard question="How many people can I have in my group?" answer="Every group requires a minimum of 2 people and a maximum of 5." />
              <FAQCard question="Can people from other schools be in my team?" answer="Yes, as long as you are all NTU students." />
            </div>
          )}
    
          {props.active === "Resources" && (
            <div className="flex flex-col justify-center m-auto rounded-xl bg-[#81BFDA] md:w-[750px] sm:w-[600px] w-[325px]">
              <FAQCard
                question="Will I be assigned a mentor?"
                answer="AnswEvery group will be assigned a student mentor for you to ask for advice about your project"
              />
              <FAQCard question="Who can I contact for enquiries?" answer="Please direct all emails to devhubilab@e.ntu.edu.sg" />
            </div>
          )}
        </div>
      );
}

export default FAQTopic