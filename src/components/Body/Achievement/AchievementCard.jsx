function AchievementCard(props) {
    return (
        <div className="mb-5">
            <div
                className="mx-10 h-0 w-0 border-r-[120px] border-b-[150px] border-l-[120px] border-r-transparent border-b-yellow-100 border-l-transparent"
                style={{ borderBottomColor: props.color || "transparent" }}
            ></div>
            <h1 className="relative bottom-17 text-center font-bold">
                {props.level || "PlaceHolder"}
            </h1>
            <p className="relative bottom-14 text-center">
                {props.description}
            </p>
        </div>
    )
}

export default AchievementCard
