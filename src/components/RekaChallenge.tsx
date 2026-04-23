import { useState } from "react";
import { Sparkles, Lightbulb, ChevronDown } from "lucide-react";
import { rekaChallengeData } from "../data/RekaChallengeData";

function RekaChallengeSection() {
  const { eyebrow, subtitle, note, cards, cta } = rekaChallengeData;
  const [openCardId, setOpenCardId] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setOpenCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-3xl border border-[#60a5fa]/15 bg-gradient-to-br from-[#eef6ff] via-[#fff7ed] to-[#eef6ff] shadow-md">
          <div className="px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
            {/* Header */}
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-black/50 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-dh-orange" />
                {eyebrow}
              </div>

              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                <span className="text-dh-orange">Reka Vision</span> Challenge
              </h2>

              <p className="mt-4 text-sm leading-7 text-black/75 sm:text-base md:text-lg">
                {subtitle}
              </p>

              <p className="mt-3 text-sm leading-6 text-black/60 sm:text-base">
                {note}
              </p>

              {cta && (
                <div className="mt-5 flex justify-center">
                  <a
                    href={cta.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-dh-orange px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-md"
                  >
                    {cta.label}
                  </a>
                </div>
              )}
            </div>

            {/* Mobile accordion */}
            {cards.length > 0 && (
            <div className="mt-8 space-y-3 md:hidden">
              {cards.map((card) => {
                const isOpen = openCardId === card.id;

                return (
                  <div
                    key={card.id}
                    className="overflow-hidden rounded-2xl border border-[#60a5fa]/15 bg-white/85 shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => toggleCard(card.id)}
                      className="flex w-full items-start justify-between gap-4 p-4 text-left transition-colors duration-300"
                    >
                      <div className="min-w-0">
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#eef6ff] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#0369a1]">
                          <Lightbulb className="h-3.5 w-3.5" />
                          Problem Area
                        </div>

                        <h3 className="text-base font-bold leading-snug text-black">
                          {card.area}
                        </h3>
                      </div>

                      <ChevronDown
                        className={`mt-1 h-5 w-5 shrink-0 text-black/50 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-4 pb-4">
                          <p className="text-sm leading-6 text-black/75">
                            {card.problem}
                          </p>

                          <div className="mt-4">
                            <p className="mb-2 text-sm font-semibold text-black/55">
                              Guiding Questions
                            </p>

                            <ul className="space-y-2">
                              {card.guidingQuestions.map((question, index) => (
                                <li
                                  key={index}
                                  className="flex items-start gap-2 text-sm leading-6 text-black/70"
                                >
                                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dh-orange" />
                                  <span>{question}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            )}

            {/* Desktop cards */}
            {cards.length > 0 && (
            <div className="mt-8 hidden grid-cols-1 gap-4 md:mt-10 md:grid md:grid-cols-2 md:gap-6">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="group rounded-2xl border border-[#60a5fa]/15 bg-white/85 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6"
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#eef6ff] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0369a1]">
                      <Lightbulb className="h-3.5 w-3.5" />
                      Problem Area
                    </div>
                  </div>

                  <h3 className="text-lg font-bold leading-snug sm:text-xl">
                    {card.area}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-black/75 sm:text-base">
                    {card.problem}
                  </p>

                  <div className="mt-5">
                    <p className="mb-2 text-sm font-semibold text-black/55">
                      Guiding Questions
                    </p>

                    <ul className="space-y-2">
                      {card.guidingQuestions.map((question, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm leading-6 text-black/70 sm:text-[15px]"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dh-orange" />
                          <span>{question}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RekaChallengeSection;