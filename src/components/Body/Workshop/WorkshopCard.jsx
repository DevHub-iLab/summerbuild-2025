import { useState } from 'react';

function WorkshopCard(props){

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    return(
        <div className='rounded-2xl text-center md:w-[250px] sm:w-[225px] w-[200px] md:mx-10 sm:mx-7.5 mx-5
        md:text-[25px] sm:text-[20px] text-[15px]' 
        onClick = {handleClick}
        style={{ backgroundColor: props.color || 'transparent'}}>
            <div className={!click ? 'visible' : 'hidden'}>
                <img className='w-90 p-3' src={props.frontImgSrc} alt='PlaceHolder'></img>
                <h1 className='font-bold p-2'>{props.frontText || 'Default Theme'}</h1>
            </div>
            <div className={!click ? 'hidden' : 'visible'}>
                <img className='w-auto p-3' src={props.backImgSrc} alt='PlaceHolder'></img>
                <h1 className='font-bold p-2'>{props.backText || 'Default Theme'}</h1>
            </div>
        </div>
    )
}

export default WorkshopCard