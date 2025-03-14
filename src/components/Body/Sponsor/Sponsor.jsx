import SponsorCard from "./SponsorCard"

function Sponsor() {
    return (
        <div className="flex flex-col mt-20 items-center">
            <h1 className="uppercase justify-center text-center font-bold md:mb-10 sm:mb-7.5 md:text-4xl sm:text-3xl text-2xl">
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
