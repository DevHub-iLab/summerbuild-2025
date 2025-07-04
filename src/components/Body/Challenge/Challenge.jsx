import ChallengeCard from "./ChallengeCard.jsx"
import { FlaskConical, Paintbrush, Wrench, Users } from "lucide-react"

function Challenge() {
    return (
        <div className="mt-20 flex flex-col items-center">
            <h1 className="justify-center text-center text-2xl font-bold uppercase sm:text-3xl md:text-4xl">
                <span className="text-[#1E1E1E]">Special </span>
                <span className="text-[#FA6B1C]">Prizes</span>
            </h1>
            <h3 className="mt-3 text-center text-lg font-semibold text-[#1E1E1E]">
                Challenge yourself with these special categories and win
                exciting prizes!
            </h3>
            <div className="mt-3 grid max-w-[90vw] auto-rows-auto grid-cols-1 justify-items-center gap-2 sm:max-w-[80vw] lg:grid-cols-2 lg:gap-5 xl:max-w-[60vw]">
                <ChallengeCard
                    color="#B1F0F7"
                    text="Best UI/UX"
                    description="Create an intuitive user experience."
                    icon={<Paintbrush size={48} color="#fa6b1c" />}
                    winnerLink="https://devpost.com/software/sigma-bytes"
                    winnerText="View Sigma Byte's Project"
                />
                <ChallengeCard
                    color="#FADA7A"
                    text="Most Innovative"
                    description="Innovate something completely new."
                    icon={<FlaskConical size={48} color="#fa6b1c" />}
                    winnerLink="https://devpost.com/software/finapet"
                    winnerText="View WaddleWeCookToday's Project"
                />
                <ChallengeCard
                    color="#f7b1c1"
                    text="Most Useful"
                    description="Build a practical solution."
                    icon={<Wrench size={48} color="#fa6b1c" />}
                    winnerLink="https://devpost.com/software/reunite-rna8vw"
                    winnerText="View Naan Stop's Project"
                />
                <ChallengeCard
                    color="#f7d7e1"
                    text="Best Freshmen Team"
                    description="Your entire team are all Year 1 students."
                    icon={<Users size={48} color="#fa6b1c" />}
                    winnerLink="https://devpost.com/software/placeit-c4t9z5"
                    winnerText="View 14_CheckMate's Project"
                />
            </div>
        </div>
    )
}

export default Challenge
