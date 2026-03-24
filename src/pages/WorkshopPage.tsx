import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import WorkshopCard from "../components/Workshop/WorkshopCard";
import { workshopPageData } from "../data/WorkshopPageData";

export default function WorkshopPage() {
  return (
    <section className="mt-20">
      <h1 className="justify-center text-center text-2xl font-bold uppercase sm:text-3xl md:text-4xl">
        <span className="text-[#1E1E1E]">Workshops </span>
        <span className="text-[#FA6B1C]">26</span>
      </h1>

      <h3 className="mt-3 text-center text-lg text-[#1E1E1E]">
        Learn industry-relevant skills from our workshops!
        <br />
        Stay tuned for updates on upcoming workshops and dates.
      </h3>

      <div className="mx-auto max-w-7xl mt-10">
        {/* Mobile / tablet swiper */}
        <div className="xl:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            pagination={{ clickable: true }}
            spaceBetween={16}
            slidesPerView={1}
            centeredSlides
            className="flex w-full max-w-xs items-center justify-center"
          >
            {workshopPageData.map((workshop) => (
              <SwiperSlide key={workshop.id}>
                <WorkshopCard
                  imageSrc={workshop.imageSrc}
                  title={workshop.title}
                  color={workshop.color}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop layout */}
        <div className="hidden xl:flex xl:flex-wrap xl:items-start xl:justify-center xl:gap-8">
          {workshopPageData.map((workshop) => (
            <WorkshopCard
              key={workshop.id}
              imageSrc={workshop.imageSrc}
              title={workshop.title}
              color={workshop.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}