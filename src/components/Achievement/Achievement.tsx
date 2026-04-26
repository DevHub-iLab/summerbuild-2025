import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import AchievementCard from "./AchievementCard"
import MedalPengi from "@assets/medalsb.png"
import { achievementData } from "../../data/AchievementData"

function Achievement() {
    const allAwards = [
        ...achievementData.mainAwards.map(award => ({
            ...award,
            category: "Main Award",
        })),
        ...achievementData.specialAwards.map(award => ({
            ...award,
            category: "Special Award",
        })),
        ...achievementData.rekaAwards.map(award => ({
            ...award,
            category: "Reka Award",
        })),
    ]

    const champion = achievementData.mainAwards.find(
        award => award.id === "champion",
    )
    const firstRunnerUp = achievementData.mainAwards.find(
        award => award.id === "first-runner-up",
    )
    const secondRunnerUp = achievementData.mainAwards.find(
        award => award.id === "second-runner-up",
    )

    return (
        <section className="mt-10 px-5">
            <h1 className="text-center text-2xl font-bold uppercase sm:text-3xl md:text-4xl">
                <span className="text-[#1E1E1E]">SummerBuild'26 </span>
                <span className="text-[#FA6B1C]">Achievements</span>
            </h1>

            <h3 className="mt-3 text-center text-lg text-[#1E1E1E]">
                Compete for top awards and special recognitions at the end of
                the programme!
            </h3>

            <div className="mt-10 flex flex-col items-center gap-6">
                <img
                    src={MedalPengi}
                    alt="Medals"
                    className="h-[18vh] w-[18vh] md:h-[20vh] md:w-[20vh]"
                />

                {/* Desktop View */}
                <div className="hidden w-full max-w-6xl flex-col gap-14 md:flex">
                    {/* Main Awards */}
                    <div>
                        <h2 className="mb-6 text-center text-2xl font-bold text-[#323854]">
                            Main Awards
                        </h2>

                        <div className="flex flex-col items-center">
                            {champion && (
                                <div className="w-full max-w-100">
                                    <AchievementCard
                                        color={champion.color}
                                        title={champion.title}
                                        description={champion.description}
                                        icon={champion.icon}
                                        variant="champion"
                                    />
                                </div>
                            )}

                            <div className="mt-6 grid w-full max-w-3xl grid-cols-2 gap-8">
                                {firstRunnerUp && (
                                    <AchievementCard
                                        color={firstRunnerUp.color}
                                        title={firstRunnerUp.title}
                                        description={firstRunnerUp.description}
                                        icon={firstRunnerUp.icon}
                                        variant="main"
                                    />
                                )}

                                {secondRunnerUp && (
                                    <AchievementCard
                                        color={secondRunnerUp.color}
                                        title={secondRunnerUp.title}
                                        description={secondRunnerUp.description}
                                        icon={secondRunnerUp.icon}
                                        variant="main"
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Special Awards */}
                    <div>
                        <h2 className="mb-6 text-center text-2xl font-bold text-[#323854]">
                            Special Awards
                        </h2>

                        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-6">
                            {achievementData.specialAwards
                                .slice(0, 2)
                                .map(award => (
                                    <AchievementCard
                                        key={award.id}
                                        color={award.color}
                                        title={award.title}
                                        description={award.description}
                                        icon={award.icon}
                                        variant="special"
                                    />
                                ))}
                        </div>

                        <div className="mx-auto mt-6 grid max-w-3xl grid-cols-2 gap-6">
                            {achievementData.specialAwards
                                .slice(2)
                                .map(award => (
                                    <AchievementCard
                                        key={award.id}
                                        color={award.color}
                                        title={award.title}
                                        description={award.description}
                                        icon={award.icon}
                                        variant="special"
                                    />
                                ))}
                        </div>
                    </div>
                    {/* Reka Awards */}
                    <div>
                        <h2 className="mb-6 text-center text-2xl font-bold text-[#323854]">
                            Reka Awards
                        </h2>

                        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-6">
                            {achievementData.rekaAwards.map(award => (
                                <AchievementCard
                                    key={award.id}
                                    color={award.color}
                                    title={award.title}
                                    description={award.description}
                                    icon={award.icon}
                                    variant="special"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile View */}
                <div className="mt-5 w-full md:hidden">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop
                        pagination={{ clickable: true }}
                        spaceBetween={12}
                        slidesPerView={1}
                        centeredSlides
                        className="flex w-full max-w-xs items-center justify-center">
                        {allAwards.map(award => (
                            <SwiperSlide key={award.id}>
                                <div className="px-2 pb-8">
                                    <p className="mb-2 text-center text-sm font-semibold tracking-wide text-[#323854] uppercase">
                                        {award.category}
                                    </p>
                                    <AchievementCard
                                        color={award.color}
                                        title={award.title}
                                        description={award.description}
                                        icon={award.icon}
                                        variant="mobile"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Achievement
