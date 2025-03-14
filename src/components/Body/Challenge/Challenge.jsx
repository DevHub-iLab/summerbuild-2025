import ChallengeCard from "./ChallengeCard.jsx"

function Challenge() {
    return (
        <div className="mt-20 flex flex-col items-center">
            <h1 className="justify-center text-center text-2xl font-bold uppercase sm:text-3xl md:text-4xl">
                <span className="text-[#1E1E1E]">Challenges </span>
                <span className="text-[#FA6B1C]">available</span>
            </h1>
            <div className="mt-3 grid max-w-[1000px] grid-cols-1 justify-items-center gap-5 md:grid-cols-2">
                <ChallengeCard color="#B1F0F7" text="Best UI/UX" />
                <ChallengeCard color="#FADA7A" text="Most Innovative" />
                <ChallengeCard color="#F5F0CD" text="Most Useful" />
                <ChallengeCard color="#81BFDA" text="Best Freshmen Themes" />
            </div>
        </div>
    )
}

export default Challenge
