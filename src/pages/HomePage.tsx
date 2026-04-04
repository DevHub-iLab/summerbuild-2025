import { HomePageElements } from "../data/HomePageData";
import AboutCard from "../components/FAQ/AboutCard";
import Achievement from "../components/Achievement/Achievement";
import Tagline from "../components/Tagline";
import Countdown from "../components/CountDown";
// import RekaChallengeSection from "../components/RekaChallenge";

export default function HomePage() {
  const { summerbuild, messageBox, stats } = HomePageElements;

  return (
    <>
      <Tagline />
      <Countdown/>

      <section className="my-10 py-5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
            <div className="w-full lg:w-1/2 md:flex justify-center lg:justify-start">
              <div className="relative mx-auto w-48 sm:w-64 md:w-80 lg:w-full lg:max-w-md">
                <img
                  className="w-full h-auto drop-shadow-xl transition-transform duration-300 hover:scale-105"
                  src={summerbuild.pengi.src}
                  alt={summerbuild.pengi.alt}
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-dh-orange/10 to-il-blue/10 rounded-3xl blur-xl -z-10"></div>
              </div>
            </div>

            <div className="w-full px-5 lg:w-1/2">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase sm:text-3xl tracking-tight">
                    {summerbuild.title.prefix}
                  </h2>
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase sm:text-3xl tracking-tight text-dh-orange">
                    {summerbuild.title.highlight}
                  </span>
                </div>

                <p className="text-lg md:text-xl leading-relaxed">
                  A <span className="font-semibold">4-week</span> program by{" "}
                  <a
                    href={summerbuild.description.link.url}
                    className="inline-flex items-center gap-1 text-dh-orange font-bold hover:text-dh-orange/80 transition-colors underline decoration-2 decoration-il-blue/50 underline-offset-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {summerbuild.description.link.text}
                    <span className="text-il-blue font-bold">
                      {summerbuild.description.link.suffix}
                    </span>
                  </a>{" "}
                  {summerbuild.description.suffix}
                </p>

                <div className="bg-[#e4f0e8] row-span-1 h-full w-full rounded-2xl p-5 md:p-6 relative transition-all duration-300 ease-in-out md:col-span-2 lg:col-span-1 shadow-md">
                  <div className="-left-1 top-4 w-3 h-3 bg-[#e4f0e8] transform rotate-45"></div>
                  <p className="text-base md:text-lg lg:text-xl">
                    <span className="text-dh-orange font-bold">
                      {messageBox.prefix}
                    </span>
                    <br className="md:hidden" />
                    <span className="mt-1 md:mt-0"> {messageBox.middle} </span>
                    <span className="text-il-blue font-bold">
                      {messageBox.highlight}
                    </span>
                    <span className="mt-2 lg:text-lg opacity-80">
                      {" "}
                      {messageBox.suffix}
                    </span>
                  </p>
                </div>

                <div className="flex justify-center flex-wrap gap-3 pt-2">
                  <span
                    className="text-dh-grey-200 hover:shadow-dh-grey-200/40 mb-8 rounded-xl py-4 px-4 text-left transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-lg md:mb-0 text-lg font-bold"
                    style={{ backgroundColor: "#a1f3ff" }}
                  >
                    {stats[0].text}
                  </span>

                  <span
                    className="text-dh-grey-200 hover:shadow-dh-grey-200/40 mb-8 rounded-xl py-4 px-4 text-left transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-lg md:mb-0 text-lg font-bold"
                    style={{ backgroundColor: "#a1f3ff" }}
                  >
                    {stats[1].text}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <AboutCard />
      {/* <RekaChallengeSection /> */}
      <Achievement />
    </>
  );
}
