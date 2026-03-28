import WinnerCard from "../components/Achievement/WinnerCard";
import { winners } from "../data/sb25Data";

export default function PreviousWinnersPage() {
  return (
    <div className="mt-20 flex flex-col items-center px-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold uppercase sm:text-3xl md:text-5xl">
          <span className="text-[#1E1E1E]">SummerBuild </span>
          <span className="text-[#FA6B1C]">25</span>
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-black/60 sm:text-base">
          A showcase of standout teams and projects from SummerBuild 2025.
        </p>
      </div>

      <div className="mt-8 grid w-full max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
        {winners.map((winner) => (
          <WinnerCard
            key={`${winner.award}-${winner.teamName}`}
            color={winner.color}
            award={winner.award}
            awardDescription={winner.awardDescription}
            teamName={winner.teamName}
            projectName={winner.projectName}
            summary={winner.summary}
            members={winner.members}
            images={winner.images}
            tags={winner.tags}
            winnerLink={winner.winnerLink}
            iconType={winner.iconType}
          />
        ))}
      </div>
    </div>
  );
}