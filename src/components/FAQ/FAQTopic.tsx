import { FAQTopicElements } from "../../data/FAQPageData";
import FAQCard from "./FAQCard";

type FAQTopicType = {
  active: string;
};

function FAQTopic({ active }: FAQTopicType) {
  const topicMap = {
    General: FAQTopicElements.general,
    Registration: FAQTopicElements.registration,
    Resources: FAQTopicElements.resources,
  };

  const activeItems = topicMap[active as keyof typeof topicMap] || [];

  return (
    <div className="mx-auto mt-8 w-full max-w-4xl rounded-4xl border border-[#BEE3F2] bg-[#8ED1EC] p-3 shadow-lg sm:p-4 md:p-5">
      <div className="flex flex-col gap-3">
        {activeItems.map((item) => (
          <FAQCard
            key={item.id}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
}

export default FAQTopic;