function SponsorCard(props) {
    return (
        <div
            className="transform rounded-md py-1 text-center transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-lg hover:shadow-gray-400"
            style={{ backgroundColor: props.color || "transparent" }}>
            <h1 className="px-10 py-7 text-xl font-semibold">
                {props.text || "Default Theme"}
            </h1>
            <img
                className="mx-auto mb-7 h-[150px] rounded-xl object-cover"
                src={props.imgSrc}
                alt="Logo"
            />
        </div>
    )
}

export default SponsorCard
