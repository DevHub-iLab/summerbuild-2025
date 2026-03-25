import WinnerCard from "../components/Achievement/WinnerCard";

import { FlaskConical, Paintbrush, Wrench, Users } from "lucide-react";

export default function PreviousWinnersPage() {
  return (
      <div className="mt-20 flex flex-col items-center">

      <h1 className="justify-center text-center font-bold uppercase text-2xl sm:text-3xl md:text-5xl">
        <span className="text-[#1E1E1E]">Summerbuild </span>
        <span className="text-[#FA6B1C]">25</span>
      </h1>

        <div className="mt-3 sm:mt-5 md:mt-10 grid max-w-[90vw] auto-rows-auto grid-cols-1 justify-items-center gap-2 sm:max-w-[80vw] lg:grid-cols-2 lg:gap-5 xl:max-w-[60vw]">
          <WinnerCard
            color="#B1F0F7"
            text="Best UI/UX"
            description="Create an intuitive user experience."
            icon={<Paintbrush size={48} color="#fa6b1c" />}
            winnerLink="https://devpost.com/software/sigma-bytes"
            winnerText="View Sigma Byte's Project"
          />
          <WinnerCard
            color="#FADA7A"
            text="Most Innovative"
            description="Innovate something completely new."
            icon={<FlaskConical size={48} color="#fa6b1c" />}
            winnerLink="https://devpost.com/software/finapet"
            winnerText="View WaddleWeCookToday's Project"
          />
          <WinnerCard
            color="#f7b1c1"
            text="Most Useful"
            description="Build a practical solution."
            icon={<Wrench size={48} color="#fa6b1c" />}
            winnerLink="https://devpost.com/software/reunite-rna8vw"
            winnerText="View Naan Stop's Project"
          />
          <WinnerCard
            color="#CDEAC0"
            text="Best Freshmen Team"
            description="Your entire team are all Year 1 students."
            icon={<Users size={48} color="#fa6b1c" />}
            winnerLink="https://devpost.com/software/placeit-c4t9z5"
            winnerText="View 14_CheckMate's Project"
          />
        </div>
      </div>
  );
}
