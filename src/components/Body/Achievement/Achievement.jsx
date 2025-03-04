import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AchievementCard from "./AchievementCard.jsx"

function Achievement(){
    return(
        <div className='flex flex-col mt-20'>
            <h1 className='uppercase justify-center text-center font-bold md:text-4xl sm:text-3xl text-2xl'> 
                <span className='text-[#1E1E1E]'>levels </span> 
                <span className='text-[#FA6B1C]'>of achievement</span>
            </h1>
            {/* Desktop View */}
            <div className='hidden md:flex w-auto justify-center mt-5 mx-2'>
                <AchievementCard color='#B1F0F7' text='Achievement 1'/>
                <AchievementCard color='#B1F0F7' text='Achievement 2'/>
                <AchievementCard color='#B1F0F7' text='Achievement 3'/>
            </div>

            {/* Mobile View - Auto-Swiping Carousel */}
            <div className="md:hidden mt-5">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    pagination={{ clickable: true }}
                    spaceBetween={10}
                    slidesPerView={1}
                    centeredSlides={true}
                    className="w-full max-w-xs flex items-center justify-center"
                >
                    <SwiperSlide>
                        <AchievementCard color="#B1F0F7" text="Achievement 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AchievementCard color="#B1F0F7" text="Achievement 2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AchievementCard color="#B1F0F7" text="Achievement 3" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Achievement