import { useState } from "react";
import { CalendarDays, Clock3, MapPin } from "lucide-react";

type WorkshopCardProps = {
  imageSrc: string;
  title: string;
  color?: string;
  date: string;
  time: string;
  location: string;
  mobile?: boolean;
};

export default function WorkshopCard({
  imageSrc,
  title,
  color = "#FADA7A",
  date,
  time,
  location,
  mobile = false,
}: WorkshopCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMobileFlip = () => {
    if (mobile) setIsFlipped((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center py-2">
      <div
        className={`group relative ${
          mobile ? "h-[280px] w-[230px]" : "h-[340px] w-56 sm:w-48 md:w-60"
        } [perspective:1200px]`}
        onMouseEnter={() => !mobile && setIsFlipped(true)}
        onMouseLeave={() => !mobile && setIsFlipped(false)}
        onClick={handleMobileFlip}
      >
        <div
          className={`relative h-full w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] ${
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* Front */}
          <div
            className={`absolute inset-0 rounded-2xl text-center shadow-xl [backface-visibility:hidden] ${
              mobile
                ? "px-4 pt-4 pb-5 shadow-[0_10px_25px_rgba(0,0,0,0.12)]"
                : "px-5 pt-5 pb-6"
            }`}
            style={{ backgroundColor: color }}
          >
            <div className="flex h-full flex-col justify-between">
              <div>
                <img
                  className={`mx-auto object-contain ${
                    mobile ? "h-34 w-full" : "w-full px-7 py-4"
                  }`}
                  src={imageSrc}
                  alt={title}
                />

                <h2
                  className={`text-center font-medium leading-snug text-[#1E1E1E] ${
                    mobile
                      ? "mt-3 text-[18px]"
                      : "px-6 pt-1 pb-2 text-xl md:text-2xl"
                  }`}
                >
                  <span className="block">{title}</span>
                  <span
                    className={`block ${
                      mobile ? "mt-1 text-[16px]" : "mt-1 text-lg md:text-xl"
                    }`}
                  >
                    Workshop
                  </span>
                </h2>
              </div>

              <p className="mt-4 text-xs font-medium text-[#5C4B1E] opacity-80">
                {mobile ? "Tap to view details" : "Hover to view details"}
              </p>
            </div>
          </div>

          {/* Back */}
          <div
            className={`absolute inset-0 rounded-2xl border border-white/30 bg-gradient-to-br from-[#FADA7A] via-[#F7C85D] to-[#f0a653] p-5 text-left shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]`}
          >
            <div className="flex h-full flex-col">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/70 p-2 shadow-md">
                  <img
                    src={imageSrc}
                    alt={title}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-bold leading-tight text-[#1E1E1E]">
                    {title}
                  </h3>
                  <p className="text-sm font-medium uppercase tracking-wide text-[#FA6B1C]">
                    Workshop
                  </p>
                </div>
              </div>

              <div className="mt-2 space-y-3 rounded-xl bg-white/55 p-4 shadow-sm backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-[#FA6B1C]" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#7A5A22]">
                      Date
                    </p>
                    <p className="text-sm font-medium text-[#1E1E1E]">{date}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-[#FA6B1C]" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#7A5A22]">
                      Time
                    </p>
                    <p className="text-sm font-medium text-[#1E1E1E]">{time}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#FA6B1C]" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#7A5A22]">
                      Location
                    </p>
                    <p className="text-sm font-medium leading-snug text-[#1E1E1E]">
                      {location}
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="mt-auto pt-4 text-center">
                <span className="inline-flex rounded-full bg-[#FA6B1C] px-3 py-1 text-xs font-semibold text-white shadow-sm">
                  {mobile ? "Tap again to flip back" : "Move away to flip back"}
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}