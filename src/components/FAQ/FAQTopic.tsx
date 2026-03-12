import { FAQTopicElements } from "../../data/FAQPageData";


import FAQCard from "./FAQCard";

type FAQTopicType = {
  active: string;
};

function FAQTopic(props: FAQTopicType) {
  return (
    <div>
      {props.active === "General" && (
        <div className="m-auto flex w-[325px] flex-col justify-center rounded-xl bg-[#81BFDA] sm:w-[600px] md:w-[750px]">
          {FAQTopicElements.general.map((item) => (
            <FAQCard
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      )}

      {props.active === "Registration" && (
        <div className="m-auto flex w-[325px] flex-col justify-center rounded-xl bg-[#81BFDA] sm:w-[600px] md:w-[750px]">
          {FAQTopicElements.registration.map((item) => (
            <FAQCard
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      )}

      {props.active === "Resources" && (
        <div className="m-auto flex w-[325px] flex-col justify-center rounded-xl bg-[#81BFDA] sm:w-[600px] md:w-[750px]">
          {FAQTopicElements.resources.map((item) => (
            <FAQCard
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FAQTopic;
