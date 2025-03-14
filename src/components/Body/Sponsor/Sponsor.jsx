import SponsorCard from "./SponsorCard"

function Sponsor() {
    return (
        <div className="mt-20 flex flex-col items-center">
            <h1 className="justify-center text-center text-2xl font-bold uppercase sm:mb-7.5 sm:text-3xl md:mb-10 md:text-4xl">
                <span className="text-[#FA6B1C]">supported </span>
                <span className="text-[#1E1E1E]">by</span>
            </h1>
            <div className="mt-5 max-w-[325px]">
                <SponsorCard
                    color="#B1F0F7"
                    text="CCDS Innovation Lab"
                    imgSrc=""
                />
            </div>
        </div>
    )
}

export default Sponsor
