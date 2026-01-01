import { MapPin, Calendar, Users } from "lucide-react";
import { School } from "lucide-react";

function AboutCard() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col max-w-7xl   justify-center gap-2 text-left md:grid md:grid-cols-4 md:grid-rows-1 ">
        <div className="bg-sb-pink-100 hover:shadow-dh-grey-200/40 text-dh-grey-200 row-span-1 flex  w-full flex-col justify-between rounded-xl p-2 transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-lg md:col-span-2 md:p-4 lg:col-span-1">
          <p className="flex items-center gap-2 text-lg font-bold">
            <MapPin size={32} />
            Where?{" "}
          </p>
          <p className="">
            <span className="text-lg">The Arc @ NTU</span>
          </p>
        </div>
        <div className="bg-sb-pink-100 hover:shadow-dh-grey-200/40 text-dh-grey-200 row-span-1 flex h-full w-full flex-col justify-between rounded-xl p-2 transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-lg md:col-span-2 md:p-4 lg:col-span-1">
          <p className="flex items-center gap-2 text-lg font-bold">
            <Calendar size={32} />
            When?{" "}
          </p>
          <p className="">
            <span className="text-lg">26 May - 27 June</span>
          </p>
        </div>
        <div className="bg-sb-pink-100 hover:shadow-dh-grey-200/40 text-dh-grey-200 row-span-1 flex h-full w-full flex-col justify-between rounded-xl p-2 transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-lg md:col-span-2 md:p-4 lg:col-span-1">
          <p className="flex items-center gap-2 text-lg font-bold">
            <School size={32} />
            Who can join?{" "}
          </p>
          <p className="">
            <span className="text-lg">
              NTU students from any Year or Faculty
            </span>
          </p>
        </div>
        <div className="bg-sb-pink-100 hover:shadow-dh-grey-200/40 text-dh-grey-200 row-span-1 flex h-full w-full flex-col justify-between rounded-xl p-2 transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-lg md:col-span-2 md:p-4 lg:col-span-1">
          <p className="flex items-center gap-2 text-lg font-bold">
            <Users size={32} />
            Team Size?{" "}
          </p>
          <p className="">
            <span className="text-lg">2 - 5 students per team</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
