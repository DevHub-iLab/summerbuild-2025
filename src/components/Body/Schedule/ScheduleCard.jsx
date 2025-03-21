function ScheduleCard(props) {
    return (
        <div className="group flex h-auto w-full items-center p-5">
            <div
                className="group-hover:shadow-dh-grey-200/40 flex h-15 w-[140px] flex-shrink-0 transform items-center justify-center rounded-4xl text-center transition-all duration-300 ease-in-out group-hover:scale-102 group-hover:shadow-lg md:w-[200px]"
                style={{ backgroundColor: props.color || "transparent" }}>
                <h1
                    className="flex items-center text-lg sm:text-xl"
                    style={{ fontWeight: props.fontWeight }}>
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
