import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import AchievementCard from "./AchievementCard.jsx"

function Achievement() {
    return (
        <div className="mt-20 flex flex-col">
            <h1 className="justify-center text-center text-2xl font-bold uppercase sm:text-3xl md:text-4xl">
                <span className="text-[#1E1E1E]">levels </span>
                <span className="text-[#FA6B1C]">of achievement</span>
            </h1>
            {/* Desktop View */}
            <div className="mx-2 mt-5 hidden w-auto justify-center md:flex">
                <AchievementCard
                    color="#B1F0F7"
                    level="Diamond"
                    description="Novel Creation"
                />
                <AchievementCard
                    color="#FADA7A"
                    level="Gold"
                    description="API Consumption"
                />
                <AchievementCard
                    color="#D9D9D9"
                    level="Silver"
                    description="CRUD"
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
                    className="flex w-full max-w-xs items-center justify-center"
                >
                    <SwiperSlide>
                        <AchievementCard
                            color="#B1F0F7"
                            level="Diamond"
                            description="Novel Creation"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AchievementCard
                            color="#FADA7A"
                            level="Gold"
                            description="API Consumption"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AchievementCard
                            color="#D9D9D9"
                            level="Silver"
                            description="CRUD"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Achievement
