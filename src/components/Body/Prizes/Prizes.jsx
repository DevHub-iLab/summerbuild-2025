import PrizesCard from "./PrizesCard.jsx"

function Prizes() {
    return (
        <div className="mt-20 flex flex-col items-center">
            <h1 className="justify-center text-center text-2xl font-bold uppercase sm:text-3xl md:text-4xl">
                <span className="text-[#1E1E1E]">special </span>
                <span className="text-[#FA6B1C]">prizes</span>
            </h1>
            <div className="mt-3 grid max-w-[1000px] grid-cols-1 justify-items-center gap-5 md:grid-cols-2">
                <PrizesCard color="#F5F0CD" text="Prize 1" />
                <PrizesCard color="#81BFDA" text="Prize 2" />
            </div>
        </div>
    )
}

export default Prizes
