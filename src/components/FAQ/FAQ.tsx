import { useState } from "react";
import { CircleHelp, ClipboardPenLine, BookOpenText } from "lucide-react";
import FAQTopic from "./FAQTopic";
import FAQExt from "./FAQExt";
import { FAQPageData } from "../../data/FAQPageData";

function FAQ() {
  const [active, setActive] = useState("General");
  const topics = FAQPageData.topics;
  const { title, extendedSection } = FAQPageData;

  const topicIcons: Record<string, React.ReactNode> = {
    General: <CircleHelp size={20} />,
    Registration: <ClipboardPenLine size={20} />,
    Resources: <BookOpenText size={20} />,
  };

  return (
    <section
      id="faq"
      className="relative mt-20 flex flex-col items-center px-6"
    >
      {/* subtle background glow */}
      <div className="absolute top-10 left-1/2 -z-10 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-[#9EE7F5]/25 blur-3xl" />

      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-2xl font-bold uppercase sm:text-3xl md:text-5xl">
          <span className={title.prefixClassName}>{title.prefix}</span>
          <span className={title.highlightClassName}>{title.highlight}</span>
        </h1>

        <p className="mt-4 text-sm font-medium text-[#3f3f3f] sm:text-base md:text-lg">
          Everything you need to know before you build this summer!
        </p>
      </div>

      {/* Topic pills */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-5">
        {topics.map((topic) => {
          const isActive = active === topic;

          return (
            <button
              key={topic}
              type="button"
              className={`flex h-12 w-[170px] items-center justify-center gap-2 rounded-full px-5 text-sm transition-all duration-300 sm:h-14 sm:w-[190px] sm:text-base md:h-15 md:w-[210px] md:text-lg ${
                isActive
                  ? "bg-[#6ECBF5] text-[#1E1E1E] font-bold shadow-md"
  : "bg-[#f0f8f7] text-[#3a3937] font-semibold hover:bg-white hover:shadow-sm"
              }`}
              onClick={() => setActive(topic)}
            >
              <span className="shrink-0">{topicIcons[topic]}</span>
              <span>{topic}</span>
            </button>
          );
        })}
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
              className="font-semibold text-[#FFD166] underline underline-offset-4 transition hover:text-white"
            >
              {extendedSection.content.link.text}
            </a>{" "}
            {extendedSection.content.emailText}
          </>
        }
      />
    </section>
  );
}

export default FAQ;