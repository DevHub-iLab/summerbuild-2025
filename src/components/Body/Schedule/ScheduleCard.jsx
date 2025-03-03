function ScheduleCard(props){
    return(
        <div className='flex w-full h-auto items-center mb-25'>
            <div className='rounded-4xl w-[200px] h-15 ml-10 text-center flex items-center' style={{ backgroundColor: props.color || 'transparent'}}>
                <h1 className='text-xl m-auto' style={{fontWeight: props.fontWeight}}>{props.header || 'PlaceHolder'}</h1>
            </div>
            <p className='ml-10 mr-10 whitespace-pre-line italic text-lg'>{props.content || ''}</p>
        </div>
    )
}

export default ScheduleCard