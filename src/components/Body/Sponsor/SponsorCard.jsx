function SponsorCard(props) {
    return(
        <div className='rounded-md text-center w-[350px] h-30 mx-2 
        transition-all duration-300 ease-in-out transform hover:scale-105 
        hover:shadow-lg hover:shadow-gray-400' 
        style={{ backgroundColor: props.color || 'transparent'}}>
            <h1 className='font-normal p-7'>{props.text || 'Default Theme'}</h1>
        </div>
    )
} 

export default SponsorCard