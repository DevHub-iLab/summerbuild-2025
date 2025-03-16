function AchievementCard(props) {
    return (
        <div className="mb-5">
            <div
                className="text-dh-grey-200 mb-8 h-full w-full rounded-2xl py-4 pr-8 pl-4 text-left md:mb-0"
                style={{ backgroundColor: props.color || "transparent" }}>
                <h1 className="text-lg font-bold">{props.level}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default AchievementCard
