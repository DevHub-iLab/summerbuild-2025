import { useState } from "react";
import FAQTopic from "./FAQTopic";
import FAQExt from "./FAQExt";
import { FAQPageData } from "../../data/FAQPageData";

function FAQ() {
  const [active, setActive] = useState("General");
  const topics = FAQPageData.topics;
  const { title, topicClassName, extendedSection } = FAQPageData;

  return (
    <div id="faq" className="mt-20 flex flex-col">
      <h1 className="mb-5 justify-center text-center text-2xl font-bold uppercase sm:mb-7.5 sm:text-3xl md:mb-10 md:text-4xl">
        <span className={title.prefixClassName}>{title.prefix}</span>
        <span className={title.highlightClassName}>{title.highlight}</span>
      </h1>
      
      <div className="flex w-full justify-around">
        {topics.map((topic) => (
          <h1
            key={topic}
            className={`mb-2.5 cursor-pointer! font-semibold sm:mb-5 md:mb-7.5 ${topicClassName} ${
              active === topic ? title.prefixClassName : "text-[#81BFDA]"
            }`}
            onClick={() => setActive(topic)}
          >
            {topic}
          </h1>
        ))}
      </div>
      
      <FAQTopic active={active} />
      
      <FAQExt
        header={extendedSection.header}
        content={
          <>
            {extendedSection.content.text}{" "}
            <a
              href={extendedSection.content.link.url}
              target="_blank"
              rel="noreferrer"
              className={extendedSection.content.link.className}
            >
              {extendedSection.content.link.text}
            </a>{" "}
            {extendedSection.content.emailText}
          </>
        }
      />
    </div>
  );
}

export default FAQ;
