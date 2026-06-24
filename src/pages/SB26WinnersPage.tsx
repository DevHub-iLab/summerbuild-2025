import WinnerCard from "../components/Achievement/WinnerCard"
import { sb26WinnersData } from "../data/Winners/sb26Data"

export default function SB26WinnersPage() {
    const { champion, firstRunnerUp, secondRunnerUp } =
        sb26WinnersData.mainAwards

    return (
        <div className="mt-20 flex flex-col items-center px-4">
            <div className="text-center">
                <h1 className="text-2xl font-bold uppercase sm:text-3xl md:text-5xl">
                    <span className="text-[#1E1E1E]">SummerBuild </span>
                    <span className="text-[#FA6B1C]">26</span>
                </h1>

                <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-black/60 sm:text-base">
                    A showcase of standout teams and projects from SummerBuild
                    2026.
                </p>
            </div>

            <div className="mt-10 flex w-full max-w-6xl flex-col gap-14">
                {/* Main Awards */}
                <section>
                    <h2 className="mb-6 text-center text-2xl font-bold text-[#323854]">
                        Main Awards
                    </h2>

                    <div className="flex flex-col items-center">
                        {champion && (
                            <div className="w-full max-w-xl">
                                <WinnerCard {...champion} />
                            </div>
                        )}

                        <div className="mt-6 grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
                            {firstRunnerUp && <WinnerCard {...firstRunnerUp} />}
                            {secondRunnerUp && (
                                <WinnerCard {...secondRunnerUp} />
                            )}
                        </div>
                    </div>
                </section>

                {/* Reka Awards */}
                <section>
                    <h2 className="mb-6 text-center text-2xl font-bold text-[#323854]">
                        Reka Awards
                    </h2>

                    <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
                        {sb26WinnersData.rekaAwards.map(winner => (
                            <WinnerCard
                                key={`${winner.award}-${winner.teamName}`}
                                {...winner}
                            />
                        ))}
                    </div>
                </section>

                {/* Special Awards */}
                <section>
                    <h2 className="mb-6 text-center text-2xl font-bold text-[#323854]">
                        Special Awards
                    </h2>

                    <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
                        {sb26WinnersData.specialAwards.map((winner, index) => {
                            const isLastOddItem =
                                sb26WinnersData.specialAwards.length % 2 ===
                                    1 &&
                                index ===
                                    sb26WinnersData.specialAwards.length - 1

                            return (
                                <div
                                    key={`${winner.award}-${winner.teamName}`}
                                    className={
                                        isLastOddItem
                                            ? "lg:col-span-2 lg:mx-auto lg:w-[calc(50%-0.75rem)]"
                                            : ""
                                    }>
                                    <WinnerCard {...winner} />
                                </div>
                            )
                        })}
                    </div>
                </section>
            </div>
        </div>
    )
}
