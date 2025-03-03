import { ReactTyped } from "react-typed";

function Tagline(){
    return(
        <div className='z-10 text-[#FA6B1C] font-bold md:text-7xl sm:text-6xl text-4xl'>
            <div className='max-w-[1000px] md:mt-[200px] sm:mt-[75px] mt-[20px] w-screen h-auto mx-auto text-center flex flex-col'>
                <p className=''>BUILD UNDER THE SUN</p>
                <div className='flex justify-center'>
                    <ReactTyped className='font-bold pl-4'
                    strings={['SOMETHING', 'ANYTHING', 'ANYTIME', 'ANYWHERE']} typeSpeed={120} backSpeed={90} loop/>
                </div>
            </div>
        </div>
    )
}

export default Tagline