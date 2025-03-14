function ScheduleCard(props) {
    return (
        <div className="group mb-10 flex h-auto w-full items-center p-5 md:mb-20">
            <div
                className="flex h-15 w-[140px] flex-shrink-0 transform items-center justify-center rounded-4xl text-center transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-gray-400 md:w-[200px]"
                style={{ backgroundColor: props.color || "transparent" }}
            >
                <h1
                    className="flex items-center text-lg sm:text-xl"
                    style={{ fontWeight: props.fontWeight }}
                >
                    {props.header || "PlaceHolder"}
                </h1>
            </div>
            <p className="ml-5 text-base font-medium whitespace-pre-line italic opacity-50 duration-400 group-hover:opacity-100 md:text-lg">
                {props.content || ""}
            </p>
        </div>
    )
}

export default ScheduleCard
