function ScheduleCard(props){
    return(
        <div className='group flex w-full h-auto items-center p-5 mb-20'>
            <div className='rounded-4xl md:w-[200px] w-[140px] h-15 flex-shrink-0 flex text-center justify-center items-center transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-gray-400' style={{ backgroundColor: props.color || 'transparent'}}>
                <h1 className='flex items-center sm:text-xl text-lg' style={{fontWeight: props.fontWeight}}>{props.header || 'PlaceHolder'}</h1>
            </div>
            <p className='ml-5 whitespace-pre-line italic md:text-lg text-base font-medium duration-400 group-hover:opacity-100 opacity-50'>{props.content || ''}</p>
        </div>
    )
}

export default ScheduleCard