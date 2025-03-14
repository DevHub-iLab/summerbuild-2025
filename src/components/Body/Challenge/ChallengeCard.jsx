function ChallengeCard(props) {
    return (
        <div
            className="m-2 h-30 w-[325px] transform rounded-md text-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-gray-400 sm:w-[350px]"
            style={{ backgroundColor: props.color || "transparent" }}
        >
            <h1 className="mt-1 p-2 font-bold">
                {props.text || "Default Challenge"}
            </h1>
        </div>
    )
}

export default ChallengeCard
