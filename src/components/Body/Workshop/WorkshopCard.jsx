import { useState } from "react"

function WorkshopCard(props) {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    return (
        <div className="mb-16 flex items-center justify-center perspective-[1000px] md:mx-10">
            {/* The actual card with wiggle animation */}
            <div
                className="mx-auto w-[14rem] rounded-2xl text-center text-[15px] shadow-xl sm:w-[10rem] sm:text-[20px] md:w-[15rem] md:text-[25px]"
                // onClick={handleClick}
                style={{
                    backgroundColor: props.color || "transparent",
                    transformStyle: "preserve-3d",
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.animation = "wiggle 1s ease-in-out"
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.animation = "none"
                }}>
                {/* Front side */}
                <div
                    className={`backface-hidden ${
                        !click ? "visible" : "hidden"
                    }`}>
                    <img
                        className="w-90 px-7 py-4"
                        src={props.frontImgSrc}
                        alt="Front"
                    />
                    <h1 className="px-8 pt-1 pb-6 text-2xl leading-normal">
                        {props.frontText || "Default Theme"}
                    </h1>
                </div>

                {/* Back side
                <div
                    className={`backface-hidden ${
                        !click ? "hidden" : "visible"
                    }`}
                >
                    <img
                        className="mx-auto mt-3 mb-2 w-3/5 rounded-xl object-cover p-3"
                        src={props.backImgSrc}
                        alt="Presenter"
                    />
                    <h1 className="px-6 pt-1 pb-6 text-lg leading-normal">
                        {props.backText || "Insert description here"}
                    </h1>
                </div> */}
            </div>
        </div>
    )
}

export default WorkshopCard
