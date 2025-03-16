import SponsorCard from "./SponsorCard"
import ILabLogo from "../../../assets/ilablogo.svg"

function Sponsor() {
    return (
        <div className="mt-10 flex max-w-[90vw] flex-col items-center">
            <h1 className="justify-center text-center text-2xl font-bold uppercase sm:mb-7.5 sm:text-3xl md:text-4xl">
                <span className="text-[#FA6B1C]">supported </span>
                <span className="text-[#1E1E1E]">by</span>
            </h1>
            <div className="mt-2 flex flex-row gap-8">
                <a
                    className="hover:mouse-pointer mx-auto mb-7 rounded-lg object-cover"
                    href="https://wwww.ilabccds.com"
                    target="_blank">
                    <img
                        className="h-[150px] w-fit transition-all duration-300 ease-in-out hover:scale-105"
                        src={ILabLogo}
                        alt="Logo"
                    />
                </a>
            </div>
        </div>
    )
}

export default Sponsor
