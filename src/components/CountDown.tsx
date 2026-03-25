import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Clock3 } from "lucide-react";
import { countdownData } from "../data/CountDownData";

type TimeLeft = {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(targetDate: string): TimeLeft {
  const difference = new Date(targetDate).getTime() - new Date().getTime();

  if (difference <= 0) {
    return {
      total: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    total: difference,
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function TimeBlock({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="min-w-16 rounded-2xl border border-white/60 bg-white/70 px-2 py-2 text-center shadow-sm backdrop-blur-sm sm:min-w-21 sm:px-4 sm:py-4">
      <div className="text-[27px] font-extrabold leading-none text-[#1E1E1E] sm:text-3xl">
        {String(value).padStart(2, "0")}
      </div>
      <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-[#6B7280] sm:text-sm">
        {label}
      </div>
    </div>
  );
}

export default function Countdown() {
  const { badge, title, description, deadline, buttonText, buttonLink } =
    countdownData;

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(deadline));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(deadline));
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  const isClosed = useMemo(() => timeLeft.total <= 0, [timeLeft.total]);

  return (
    <section className="px-4 pt-6 sm:px-6">
      <div className="mx-auto max-w-150">
        <div className="rounded-4xl border border-[#E8D8BE] bg-linear-to-br from-[#FFF8EE] via-[#F7F3EC] to-[#EEF7FB] p-5 shadow-md sm:p-6">
          <div className="flex items-start gap-4">
            {/* Icon on top-left */}
            <div className="mt-1 flex h-13 w-13 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-[#6ECBF5] shadow-sm">
              <Clock3 className="h-7 w-7 text-[#1E1E1E]" />
            </div>

            {/* Right content */}
            <div className="min-w-0 flex-1">
              <h2 className="max-w-105 text-2xl sm:text-3xl font-extrabold leading-tight text-[#1E1E1E]">
                {title}
              </h2>

              <p className="mt-4 max-w-110 text-l leading-relaxed text-[#5F6B7A]">
                {description}
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <div className="inline-flex rounded-full border border-[#ECD9BF] bg-white/80 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-[#FA6B1C] shadow-sm sm:text-xs">
                {badge}
            </div>
            </div>

          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <TimeBlock value={timeLeft.days} label="Days" />
            <TimeBlock value={timeLeft.hours} label="Hours" />
            <TimeBlock value={timeLeft.minutes} label="Minutes" />
            <TimeBlock value={timeLeft.seconds} label="Seconds" />
          </div>

          <div className="mt-6 flex justify-center">
            {isClosed ? (
              <div className="flex h-13 w-full items-center justify-center rounded-2xl bg-[#E5E7EB] px-5 text-sm font-bold text-[#6B7280]">
                Registration Closed
              </div>
            ) : (
              <a
                href={buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-13 w-full max-w-75 items-center justify-center gap-2 rounded-2xl bg-[#FF6A1A] px-5 text-base font-bold text-white shadow-md transition-all duration-300 hover:brightness-95"
              >
                {buttonText}
                <ArrowRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}