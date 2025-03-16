function ChallengeCard(props){
    return(
        <div className='flex items-center justify-center rounded-md text-center sm:w-[350px] w-[325px] h-20 m-2 
        transition-all duration-300 ease-in-out transform hover:scale-105 
        hover:shadow-lg hover:shadow-gray-400' 
        style={{ backgroundColor: props.color || 'transparent'}}>
            <h1 className='font-bold mt-1 p-2'>{props.text || 'Default Challenge'}</h1>
        </div>
    )
}

export default ChallengeCard