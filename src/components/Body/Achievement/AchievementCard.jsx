function AchievementCard(props){
    return(
        <div className='mb-5 '>
            <div className="w-0 h-0 mx-10
                border-l-[120px] border-l-transparent
                border-b-[150px] border-b-yellow-100
                border-r-[120px] border-r-transparent"
                style={{ borderBottomColor: props.color || 'transparent'}}>
            </div>
            <p className='relative bottom-15 font-bold text-center'>{props.text || 'PlaceHolder'}</p>
        </div>
    )
}

export default AchievementCard