import { MapPin, Calendar, SquarePen, Users } from "lucide-react"
import SummerBuildGraphic from "../../../assets/summerbuildgraphic.png"
import Timer from "../Countdown/Timer"
import { School } from "lucide-react"

function AboutCard() {
    return (
        <div className="mt-8 flex flex-col items-center justify-center">
            <div className="flex w-[90vw] flex-col items-center justify-center gap-2 text-left md:grid md:grid-cols-4 md:grid-rows-2 lg:w-[80vw] xl:grid-cols-6 xl:grid-rows-2 xl:gap-2 2xl:w-[70vw]">
                <div className="col-span-4 row-span-2 my-auto h-full w-full rounded-xl p-5 text-white xl:col-span-2 xl:row-span-3">
                    <img
                        className="scale-100 sm:scale-50 md:scale-70"
                        src={SummerBuildGraphic}
                        alt="SummerBuild Graphic"
                    />
                </div>

                <div className="bg-sb-yellow-100 hover:shadow-dh-grey-200/40 text-dh-grey-200 flex w-full flex-col justify-between gap-4 rounded-xl p-4 transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-lg md:col-span-4 md:row-span-1 lg:col-span-4 lg:row-span-2">
                    <p>
                        <span className="text-dh-orange font-bold">
                            SummerBuild{" "}
                        </span>
                        is a 5-week programme by{" "}
                        <a
                            href="https://devhub.ilabccds.com"
                            className="text-dh-orange font-black underline">
                            DevHub
                            <span className="text-il-blue underline">
                                @iLab
                            </span>
                        </a>{" "}
                        to empower students to build software projects in a
                        beginner friendly environment where they can
                        <span className="font-bold"> build anything</span> they
                        want
                    </p>
                    <p>
                        By the end of the programme, you'll have built a worthy
                        project that you can earn certificates and prizes for
                        your hard work!
                    </p>
                </div>

                <div className="bg-sb-pink-100 hover:shadow-dh-grey-200/40 text-dh-grey-200 row-span-1 flex h-full w-full flex-col justify-between rounded-xl p-2 transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-lg md:col-span-2 md:p-4 lg:col-span-1">
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
    )
}

export default AboutCard
