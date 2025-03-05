function ScheduleCard(props){
    return(
        <div className='group flex w-full h-auto items-center mb-20'>
            <div className='rounded-4xl w-[200px] h-15 text-center flex items-center transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-gray-400' style={{ backgroundColor: props.color || 'transparent'}}>
                <h1 className='text-xl m-auto' style={{fontWeight: props.fontWeight}}>{props.header || 'PlaceHolder'}</h1>
            </div>
            <p className='ml-10 whitespace-pre-line italic text-lg font-medium duration-400 group-hover:opacity-100 opacity-50'>{props.content || ''}</p>
        </div>
    )
}

export default ScheduleCard