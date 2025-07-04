function ChallengeCard(props) {
    return (
        <div
            className="hover:shadow-dh-grey-200/40 col-span-1 grid h-full w-full grid-cols-4 rounded-xl py-2 transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-lg"
            style={{ backgroundColor: props.color }}>
            <div className="col-span-1 flex h-full w-full items-center justify-center px-2 py-4 lg:px-0">
                {props.icon}
            </div>
            <div className="col-span-3 flex w-full flex-col items-start justify-around pr-4">
                <h1 className="text-xl font-bold">{props.text}</h1>
                <h2 className="text-lg">{props.description}</h2>
                {props.winnerLink && (
                    <a
                        href={props.winnerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-[#FA6B1C] underline transition-colors duration-200 hover:text-[#e5591a]">
                        {props.winnerText || "View Winner →"}
                    </a>
                )}
            </div>
        </div>
    )
}

export default ChallengeCard
