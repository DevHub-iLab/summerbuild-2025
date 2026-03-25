import { MapPin, Calendar, Users, School } from "lucide-react";
import { HomePageElements } from "../../data/HomePageData";

const iconMap = {
  mapPin: MapPin,
  calendar: Calendar,
  school: School,
  users: Users,
};

function AboutCard() {
  const { aboutInfoCards } = HomePageElements;

  return (
    <div className="flex justify-center px-5">
      <div className="flex w-full max-w-4xl flex-col gap-2 md:gap-6 text-left md:grid md:grid-cols-2 md:grid-rows-1">
        {aboutInfoCards.map((item, index) => {
          const IconComponent =
            iconMap[item.icon as keyof typeof iconMap] || MapPin;

          return (
            <div
              key={index}
              className="bg-sb-pink-100 hover:shadow-dh-grey-200/40 text-dh-grey-200 row-span-1 flex h-full w-full flex-col justify-between rounded-xl p-2 transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-lg md:col-span-2 md:p-4 lg:col-span-1"
            >
              <p className="flex items-center gap-2 text-lg font-bold">
                <IconComponent size={32} />
                {item.title}
              </p>

              <p>
                <span className="text-lg">{item.value}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutCard;