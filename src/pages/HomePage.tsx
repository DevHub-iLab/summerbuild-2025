import SummerBuildGraphic from "../assets/summerbuildgraphic.png";
import AboutCard from "../components/FAQ/AboutCard";
import Achievement from "../components/Achievement/Achievement";

export default function HomePage() {
  return (
    <>
      <section className="pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 md: flex justify-center lg:justify-start">
              <div className="relative max-w-md">
                <img
                  className="w-full h-auto drop-shadow-xl transition-transform duration-300 hover:scale-105"
                  src={SummerBuildGraphic}
                  alt="SummerBuild Graphic"
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-dh-orange/10 to-il-blue/10 rounded-3xl blur-xl -z-10"></div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2">
                  <h2 className="text-4xl md:text-5xl font-bold  uppercase sm:text-3xl md:text-4xl tracking-tight">
                    Summer
                  </h2>
                  <span className="text-4xl md:text-5xl font-bold uppercase sm:text-3xl md:text-4xl tracking-tight text-dh-orange">
                    Build
                  </span>
                </div>

                <p className="text-lg md:text-xl leading-relaxed">
                  A 5-week program by{" "}
                  <a
                    href="https://devhub.ilabccds.com"
                    className="inline-flex items-center gap-1 text-dh-orange font-bold hover:text-dh-orange/80 transition-colors underline decoration-2 decoration-il-blue/50 underline-offset-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DevHub
                    <span className="text-il-blue font-bold">@iLab</span>
                  </a>{" "}
                  designed to empower students in building software projects.
                </p>

                <div className="bg-neutral-100 row-span-1  h-full w-full flex-col justify-between rounded-xl p-2 transition-all duration-300 ease-in-out  md:col-span-2 md:p-4 lg:col-span-1">
                  <p className="text-lg md:text-xl">
                    We provide a{" "}
                    <span className="text-dh-orange font-bold">
                      beginner-friendly environment
                    </span>{" "}
                    where you can{" "}
                    <span className="text-il-blue font-bold">
                      build anything you imagine
                    </span>
                    — from web apps and mobile applications to innovative
                    solutions that make a difference.
                  </p>
                </div>

                <div className="flex justify-center flex-wrap gap-3 pt-4">
                  <span
                    className="text-dh-grey-200 hover:shadow-dh-grey-200/40 mb-8  rounded-xl py-4 px-4 text-left transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-lg md:mb-0 text-lg font-bold"
                    style={{ backgroundColor: "#e0f2fe" }} // light blue
                  >
                    5 Weeks
                  </span>

                  <span
                    className="text-dh-grey-200 hover:shadow-dh-grey-200/40 mb-8  rounded-xl py-4 px-4  text-left transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-lg md:mb-0 text-lg font-bold "
                    style={{ backgroundColor: "#a1f3ff" }} // light pink
                  >
                    Beginner friendly
                  </span>

                  <span
                    className="text-dh-grey-200 hover:shadow-dh-grey-200/40 mb-8  rounded-xl py-4 px-4 text-left transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-lg md:mb-0 text-lg font-bold "
                    style={{ backgroundColor: "#f3e8ff" }} // light pink
                  >
                    Project-Based Learning
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutCard />
      <Achievement />
    </>
  );
}
