function SponsorCard(props) {
    return (
        <div
            className="rounded-md text-center py-1 
        transition-all duration-300 ease-in-out transform hover:scale-105 
        hover:shadow-lg hover:shadow-gray-400"
            style={{ backgroundColor: props.color || "transparent" }}
        >
            <h1 className="text-xl font-semibold px-10 py-7">
                {props.text || "Default Theme"}
            </h1>
            <img
                className="h-[150px] w-[150px] object-cover rounded-lg mx-auto mb-7"
                src={props.imgSrc}
                alt="Logo"
            />
        </div>
    )
}

export default SponsorCard
