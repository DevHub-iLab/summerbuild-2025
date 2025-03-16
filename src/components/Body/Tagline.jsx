import { ReactTyped } from "react-typed"

function Tagline() {
    return (
        <div className="text-dh-orange z-10 text-4xl font-bold sm:text-6xl md:text-7xl">
            <div className="mx-auto mt-[10vh] flex h-auto w-screen max-w-[1000px] flex-col text-center md:mt-[15vh]">
                <div className="flex justify-center">
                    BUILD{" "}
                    <ReactTyped
                        className="pl-4 font-bold"
                        strings={["ANYTHING", "ANYWHERE", "ANYTIME"]}
                        typeSpeed={120}
                        backSpeed={90}
                        loop
                    />
                </div>
            </div>
        </div>
    )
}

export default Tagline
