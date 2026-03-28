import { useState } from "react";
import {
  FlaskConical,
  Paintbrush,
  Wrench,
  Users,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

type WinnerProps = {
  color: string;
  award: string;
  awardDescription: string;
  teamName: string;
  projectName: string;
  summary: string;
  members: string[];
  images: string[];
  tags: string[];
  winnerLink: string | null;
  iconType: "paintbrush" | "flask" | "wrench" | "users";
};

const iconMap = {
  paintbrush: Paintbrush,
  flask: FlaskConical,
  wrench: Wrench,
  users: Users,
};

export default function WinnerCard({
  color,
  award,
  awardDescription,
  teamName,
  projectName,
  summary,
  members,
  images,
  tags,
  winnerLink,
  iconType,
}: WinnerProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const Icon = iconMap[iconType];

  const hasMultipleImages = images.length > 1;

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="group overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{ backgroundColor: color }}
    >
      <div className="flex h-full flex-col">
        {/* Carousel */}
        <div className="relative h-52 w-full overflow-hidden sm:h-60">
          <img
            src={images[currentImage]}
            alt={`${projectName} screenshot ${currentImage + 1}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />

          {/* Award badge */}
          <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-sm font-semibold text-[#1E1E1E] shadow-sm backdrop-blur-sm">
            <Icon size={16} color="#FA6B1C" />
            <span>{award}</span>
          </div>

          {/* Carousel arrows */}
          {hasMultipleImages && (
            <>
              <button
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-white/85 p-2 shadow transition hover:bg-white"
              >
                <ChevronLeft size={18} className="text-[#1E1E1E]" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-white/85 p-2 shadow transition hover:bg-white"
              >
                <ChevronRight size={18} className="text-[#1E1E1E]" />
              </button>
            </>
          )}

          {/* Dots */}
          {hasMultipleImages && (
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/20 px-3 py-1.5 backdrop-blur-sm">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  aria-label={`Go to image ${index + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    currentImage === index ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          <h2 className=" text-2xl font-bold text-[#1E1E1E]">
            Team Name: {teamName}
          </h2>

          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-black/45">
            Project: {projectName}
          </p>

          {/* <p className="mt-2 text-sm text-black/65">{awardDescription}</p> */}

          <p className="mt-4 text-[15px] leading-relaxed text-[#1E1E1E]">
            {summary}
          </p>

          {/* Tags */}
          {/* <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-[#1E1E1E]"
              >
                {tag}
              </span>
            ))}
          </div> */}

          {/* Team members */}
          <div className="mt-5">
            <h3 className="text-s font-semibold uppercase tracking-[0.14em] text-black">
              Team Members
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-[#1E1E1E]">
              {members.join(" • ")}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-auto pt-6 flex flex-wrap gap-3">
            {winnerLink && (
              <a
                href={winnerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#FA6B1C] px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#e5591a]"
              >
                View Project
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}