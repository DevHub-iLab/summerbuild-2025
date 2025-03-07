import { ReactTyped } from "react-typed";

function Tagline(){
    return(
        <div className='z-10 text-[#FA6B1C] font-bold md:text-7xl sm:text-6xl text-4xl'>
            <div className='max-w-[1000px] md:mt-[200px] mt-[75px] w-screen h-auto mx-auto text-center flex flex-col'>
                <div className='flex justify-center'>
                    BUILD <ReactTyped className='font-bold pl-4'
                    strings={[ 'ANYTHING', 'ANYWHERE', 'SOMEWHERE']} typeSpeed={120} backSpeed={90} loop/>
                </div>
            </div>
        </div>
    )
}

export default Tagline