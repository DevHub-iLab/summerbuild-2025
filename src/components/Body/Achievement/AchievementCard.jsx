function AchievementCard(props) {
    return (
        <div className="mb-5">
            <div
                className="text-dh-grey-200 hover:shadow-dh-grey-200/40 mb-8 h-full w-full rounded-xl py-4 pr-8 pl-4 text-left transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-lg md:mb-0"
                style={{ backgroundColor: props.color || "transparent" }}>
                <h1 className="text-lg font-bold">{props.level}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default AchievementCard
