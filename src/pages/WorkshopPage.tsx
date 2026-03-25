import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import WorkshopCard from "../components/Workshop/WorkshopCard";
import { workshopPageData } from "../data/WorkshopPageData";

export default function WorkshopPage() {
  return (
    <section className="mt-20">
      <h1 className="justify-center text-center font-bold uppercase text-2xl sm:text-3xl md:text-5xl">
        <span className="text-[#1E1E1E]">Workshops </span>
        <span className="text-[#FA6B1C]">'26</span>
      </h1>

      <h3 className="text-center mt-4 text-sm font-medium text-black/70 sm:text-base md:text-lg">
        Learn industry-relevant skills from our workshops!
        <br />
        Stay tuned for updates on upcoming workshops and dates.
      </h3>

      <div className="mx-auto mt-10 max-w-7xl">
        {/* Mobile / tablet swiper */}
        <div className="md:hidden">
          <div className="mx-auto w-full max-w-65 pb-12">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={1}
              centeredSlides
              className="workshop-swiper overflow-visible"
            >
              {workshopPageData.map((workshop) => (
                <SwiperSlide key={workshop.id} className="overflow-visible">
                  <WorkshopCard
                    imageSrc={workshop.imageSrc}
                    title={workshop.title}
                    color={workshop.color}
                    date={workshop.date}
                    time={workshop.time}
                    location={workshop.location}
                    mobile
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex md:flex-wrap md:items-start md:justify-center md:gap-8">
          {workshopPageData.map((workshop) => (
            <WorkshopCard
              key={workshop.id}
              imageSrc={workshop.imageSrc}
              title={workshop.title}
              color={workshop.color}
              date={workshop.date}
              time={workshop.time}
              location={workshop.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
}