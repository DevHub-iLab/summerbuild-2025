import { useEffect, useState } from "react";
import { CircleHelp, ClipboardPenLine, BookOpenText } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import FAQTopic from "./FAQTopic";
import FAQExt from "./FAQExt";
import { FAQPageData } from "../../data/FAQPageData";
import questionImg from "../../assets/sb/question.svg";

function FAQ() {
  const [active, setActive] = useState("General");
  const topics = FAQPageData.topics;
  const { title, extendedSection } = FAQPageData;

  const topicIcons: Record<string, React.ReactNode> = {
    General: <CircleHelp size={18} />,
    Registration: <ClipboardPenLine size={18} />,
    Resources: <BookOpenText size={18} />,
  };

  const topicIndexMap: Record<string, number> = {
    General: 0,
    Registration: 1,
    Resources: 2,
  };

  const [activeIndex, setActiveIndex] = useState(topicIndexMap[active]);

  useEffect(() => {
    setActiveIndex(topicIndexMap[active]);
  }, [active]);

  return (
    <section
      id="faq"
      className="relative mt-20 flex flex-col items-center px-6"
    >
      
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="font-bold uppercase text-2xl sm:text-3xl md:text-5xl">
          <span className={title.prefixClassName}>{title.prefix}</span>
          <span className={title.highlightClassName}>{title.highlight}</span>
        </h1>

        <p className="mt-4 text-sm font-medium text-[#3f3f3f] sm:text-base md:text-lg">
          Everything you need to know before you build this summer!
        </p>
      </div>

      {/* Mobile swipeable topic tabs */}
      <div className="mt-8 w-full max-w-85 sm:hidden">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          centeredSlides
          spaceBetween={12}
          initialSlide={activeIndex}
          onSlideChange={(swiper) => {
            const selectedTopic = topics[swiper.activeIndex];
            setActive(selectedTopic);
            setActiveIndex(swiper.activeIndex);
          }}
          pagination={{
            clickable: true,
          }}
          className="faq-topic-swiper"
        >
          {topics.map((topic) => {
            const isActive = active === topic;

            return (
              <SwiperSlide key={topic}>
                <button
                  type="button"
                  onClick={() => setActive(topic)}
                  className={`mx-auto flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-sm transition-all duration-300 ${
                    isActive
                      ? "bg-[#6ECBF5] text-[#1E1E1E] font-bold shadow-md"
                      : "bg-[#F0F8F7] text-[#3a3937] font-semibold shadow-sm"
                  }`}
                >
                  <span className="shrink-0">{topicIcons[topic]}</span>
                  <span>{topic}</span>
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* Desktop / tablet topic pills */}
      <div className="mt-8 hidden flex-wrap items-center justify-center gap-3 sm:flex md:gap-5">
        {topics.map((topic) => {
          const isActive = active === topic;

          return (
            <button
              key={topic}
              type="button"
              className={`flex h-12 w-42.5 items-center justify-center gap-2 rounded-full px-5 text-sm transition-all duration-300 sm:h-14 sm:w-47.5 sm:text-base md:h-15 md:w-52.5 md:text-lg ${
                isActive
                  ? "bg-[#6ECBF5] text-[#1E1E1E] font-bold shadow-md"
                  : "bg-[#F0F8F7] text-[#3a3937] font-semibold hover:bg-white hover:shadow-sm"
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
        imageSrc={questionImg}
        imageAlt="Penguin answering frequently asked questions"
        content={
          <>
            {extendedSection.content.text}{" "}
            <a
              href={extendedSection.content.link.url}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#FFD166] underline underline-offset-4 transition hover:text-[#FA6B1C]"
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