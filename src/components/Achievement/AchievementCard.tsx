import {
  Trophy,
  Medal,
  Award,
  Code2,
  Bot,
  Lightbulb,
  GraduationCap,
  Heart,
} from "lucide-react";

type AchievementCardProps = {
  color: string;
  title: string;
  description?: string;
  icon: string;
  variant?: "main" | "champion" | "special" | "mobile";
};

const iconMap = {
  trophy: Trophy,
  medal: Medal,
  award: Award,
  code: Code2,
  bot: Bot,
  lightbulb: Lightbulb,
  graduation: GraduationCap,
  heart: Heart,
};

function AchievementCard({
  color,
  title,
  description,
  icon,
  variant = "special",
}: AchievementCardProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap] || Award;

  const cardClass =
    variant === "champion"
      ? "min-h-[160px] px-5 py-6"
      : variant === "main"
        ? "min-h-[150px] px-5 py-6"
        : variant === "mobile"
          ? "px-5 py-5"
          : "min-h-[150px] px-5 py-6";

  const titleClass =
    variant === "champion"
      ? "text-2xl"
      : variant === "main"
        ? "text-xl"
        : "text-lg";

  const iconWrapClass =
    variant === "champion"
      ? "h-16 w-16"
      : "h-13 w-13";

  const iconSize =
    variant === "champion"
      ? 32
      : 26;

  return (
    <div
      className={`w-full rounded-2xl text-left shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl ${cardClass}`}
      style={{ backgroundColor: color || "transparent" }}
    >
      <div className="flex items-center gap-3">
  <div
    className={`flex items-center justify-center rounded-xl bg-white/45 shadow-sm ${iconWrapClass}`}
  >
    <IconComponent
      size={iconSize}
      strokeWidth={2.2}
      className="" // text-[#323854]
    />
  </div>

  <h3 className={`font-bold leading-tight ${titleClass}`}>
    {title}
  </h3>
</div>
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-black/85">
          {description}
        </p>
      )}
    </div>
  );
}

export default AchievementCard;