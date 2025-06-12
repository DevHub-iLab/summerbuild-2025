import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import WorkshopCard from "./WorkshopCard.jsx"
import HTMLLogo from "../../../assets/htmlIcon.svg"
import ReactLogo from "../../../assets/reactIcon.svg"
import ExpressLogo from "../../../assets/expressIcon.svg"
import Eyes from "../../../assets/eyes.png"
import AWS from "../../../assets/aws.svg"
import Docker from "../../../assets/docker.svg"

function Workshop() {
    return (
        <div id="workshop" className="mt-20 flex flex-col">
            <h1 className="justify-center text-center text-2xl font-bold uppercase sm:text-3xl md:text-4xl">
                <span className="text-[#1E1E1E]">workshops </span>
                <span className="text-[#FA6B1C]">available</span>
            </h1>
            <h3 className="mt-3 text-center text-lg font-semibold text-[#1E1E1E]">
                Learn industry-relevant skills from our workshops!
                <br />
                Stay tuned for updates on upcoming workshops & dates!
            </h3>
            {/* Swiper for mobile */}
            <div className="mt-10 xl:hidden">
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
                        <WorkshopCard
                            frontImgSrc={HTMLLogo}
                            color="#FADA7A"
                            frontText="HTML/CSS/JS Workshop"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <WorkshopCard
                            frontImgSrc={ReactLogo}
                            color="#FADA7A"
                            frontText="React Workshop"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <WorkshopCard
                            frontImgSrc={ExpressLogo}
                            color="#FADA7A"
                            frontText="Express.js Workshop"
                        />
                    </SwiperSlide>{" "}
                    <SwiperSlide>
                        <WorkshopCard
                            frontImgSrc={AWS}
                            color="#FADA7A"
                            frontText="AWS Workshop"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <WorkshopCard
                            frontImgSrc={Docker}
                            color="#FADA7A"
                            frontText="Docker Workshop"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Normal layout for larger screens */}
            <div className="mt-10 hidden justify-center xl:flex">
                <WorkshopCard
                    frontImgSrc={HTMLLogo}
                    color="#FADA7A"
                    frontText="HTML/CSS/JS Workshop"
                />
                <WorkshopCard
                    frontImgSrc={ReactLogo}
                    color="#FADA7A"
                    frontText="React Workshop"
                />
                <WorkshopCard
                    frontImgSrc={ExpressLogo}
                    color="#FADA7A"
                    frontText="Express.js Workshop"
                />
                <WorkshopCard
                    frontImgSrc={AWS}
                    color="#FADA7A"
                    frontText="AWS Workshop"
                />
                <WorkshopCard
                    frontImgSrc={Docker}
                    color="#FADA7A"
                    frontText="Docker Workshop"
                />
            </div>
        </div>
    )
}

export default Workshop
