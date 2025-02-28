import WorkshopCard from "./WorkshopCard.jsx";
import HTMLLogo from '../../../assets/htmlIcon.svg';
import ReactLogo from '../../../assets/reactIcon.svg';
import ExpressLogo from '../../../assets/expressIcon.svg';

function Workshop(){
    return(
        <div id='workshop' className='flex flex-col mt-20'>
            <h1 className='uppercase justify-center text-center font-bold md:text-4xl sm:text-3xl text-2xl'> 
                <span className='text-[#1E1E1E]'>workshops </span> 
                <span className='text-[#FA6B1C]'>available</span>
            </h1>
            <div className='flex justify-center mt-10'>
                <WorkshopCard frontImgSrc={HTMLLogo} color='#FADA7A'  frontText='HTML/CSS'/>
                <WorkshopCard frontImgSrc={ReactLogo} color='#FADA7A' frontText='React'/>
                <WorkshopCard frontImgSrc={ExpressLogo} color='#FADA7A' frontText='Express.js'/>
            </div>
        </div>
    )
}

export default Workshop