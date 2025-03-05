import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import WorkshopCard from "./WorkshopCard.jsx";
import HTMLLogo from '../../../assets/htmlIcon.svg';
import ReactLogo from '../../../assets/reactIcon.svg';
import ExpressLogo from '../../../assets/expressIcon.svg';

function Workshop() {
    return (
        <div id='workshop' className='flex flex-col mt-20'>
            <h1 className='uppercase justify-center text-center font-bold md:text-4xl sm:text-3xl text-2xl'> 
                <span className='text-[#1E1E1E]'>workshops </span> 
                <span className='text-[#FA6B1C]'>available</span>
            </h1>

            {/* Swiper for mobile */}
            <div className="md:hidden mt-10">
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
                        <WorkshopCard frontImgSrc={HTMLLogo} color='#FADA7A' frontText='HTML/CSS Workshop' backText='This workshop is presented by XYZ. It will cover introduction to HTML.'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <WorkshopCard frontImgSrc={ReactLogo} color='#FADA7A' frontText='React Workshop'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <WorkshopCard frontImgSrc={ExpressLogo} color='#FADA7A' frontText='Express.js Workshop'/>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Normal layout for larger screens */}
            <div className='hidden md:flex justify-center mt-10'>
                <WorkshopCard frontImgSrc={HTMLLogo} color='#FADA7A' frontText='HTML/CSS Workshop' backText='This workshop is presented by XYZ. It will cover introduction to HTML.'/>
                <WorkshopCard frontImgSrc={ReactLogo} color='#FADA7A' frontText='React Workshop'/>
                <WorkshopCard frontImgSrc={ExpressLogo} color='#FADA7A' frontText='Express.js Workshop'/>
            </div>
        </div>
    );
}

export default Workshop;