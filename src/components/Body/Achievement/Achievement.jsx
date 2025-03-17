import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import AchievementCard from "./AchievementCard.jsx"
import MedalPengi from "../../../assets/medalsb.png"

function Achievement() {
    return (
        <div className="mt-20 flex flex-col">
            <h1 className="justify-center text-center text-2xl font-bold uppercase sm:text-3xl md:text-4xl">
                <span className="text-[#1E1E1E]">levels of </span>
                <span className="text-[#FA6B1C]">achievement</span>
            </h1>
            <h3 className="mt-3 text-center text-lg font-semibold text-[#1E1E1E]">
                Earn Certificates for how advanced your project is by the end of
                the programme!
            </h3>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                <img
                    src={MedalPengi}
                    alt="Medals"
                    className="mt-4 h-[20vh] w-[20vh] md:mt-0"
                />
                {/* Desktop View */}
                <div className="align-center mx-2 mt-5 hidden w-auto flex-col justify-center md:flex">
                    <AchievementCard
                        color="#B1F0F7"
                        level="Diamond"
                        description="Creating something novel, something unique"
                    />
                    <AchievementCard
                        color="#FADA7A"
                        level="Gold"
                        description="Explore the API capabilities of the web"
                    />
                    <AchievementCard
                        color="#D9D9D9"
                        level="Silver"
                        description="Create, Read, Update, Delete - the basics"
                    />
                </div>

                {/* Mobile View - Auto-Swiping Carousel */}
                <div className="mt-5 md:hidden">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                        pagination={{ clickable: true }}
                        spaceBetween={10}
                        slidesPerView={1}
                        centeredSlides={true}
                        className="flex w-full max-w-xs items-center justify-center">
                        <SwiperSlide>
                            <AchievementCard
                                color="#B1F0F7"
                                level="Diamond"
                                description="Creating something novel, something unique"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AchievementCard
                                color="#FADA7A"
                                level="Gold"
                                description="Explore the API capabilities of the web"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AchievementCard
                                color="#D9D9D9"
                                level="Silver"
                                description="Create, Read, Update, Delete - the basics"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Achievement
