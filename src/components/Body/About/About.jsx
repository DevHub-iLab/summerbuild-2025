import AboutCard from "./AboutCard.jsx"

function About(){
    return(
        <div id='about' className='flex flex-col mt-20'>
            <h1 className='uppercase justify-center text-center font-bold md:text-4xl sm:text-3xl text-2xl'> 
                <span className='text-[#1E1E1E]'>about </span> 
                <span className='text-[#FA6B1C]'>summerbuild 2025</span>
            </h1>
            <AboutCard/>
        </div>
    )
}

export default About