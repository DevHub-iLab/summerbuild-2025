import AboutCard from "./AboutCard.jsx"

function About() {
    return (
        <div id="about" className="mt-20 flex flex-col">
            <h1 className="justify-items-center text-center text-2xl font-bold uppercase sm:text-3xl md:text-4xl">
                <span className="text-[#1E1E1E]">about </span>
                <span className="text-[#FA6B1C]">summerbuild 2025</span>
            </h1>
            <AboutCard />
        </div>
    )
}

export default About
