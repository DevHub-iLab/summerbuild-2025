function PrizesCard(props) {
    return (
        <div
            className="mx-2 h-30 w-[325px] transform rounded-md text-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-gray-400 sm:w-[350px]"
            style={{ backgroundColor: props.color || "transparent" }}
        >
            <h1 className="p-2 font-bold">{props.text || "Default Theme"}</h1>
        </div>
    )
}

export default PrizesCard
