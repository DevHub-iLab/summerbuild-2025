import { useState } from 'react';

function WorkshopCard(props) {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };

    return (
        <div className="flex justify-center items-center perspective-[1000px]">
            {/* The actual card with wiggle animation */}
            <div
                className="rounded-2xl text-center md:w-[250px] sm:w-[225px] w-[200px] 
                md:mx-10 sm:mx-7.5 mx-5 md:text-[25px] sm:text-[20px] text-[15px] 
                shadow-xl"
                onClick={handleClick}
                style={{
                    backgroundColor: props.color || "transparent",
                    transformStyle: "preserve-3d",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.animation = "wiggle 1s ease-in-out";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.animation = "none";
                }}
            >
                {/* Front side */}
                <div className={!click ? "visible" : "hidden"}>
                    <img className="w-90 py-4 px-7" src={props.frontImgSrc} alt="Front" />
                    <h1 className="text-2xl pt-1 pb-6 px-12 leading-normal">
                        {props.frontText || "Default Theme"}
                    </h1>
                </div>

                {/* Back side */}
                <div className={!click ? "hidden" : "visible"}>
                    <img className="w-3/5 object-cover rounded-lg p-3 mx-auto mt-3 mb-2" src={props.backImgSrc} alt="Presenter" />
                    <h1 className="text-lg pt-1 pb-6 px-6 leading-normal">{props.backText || "Insert description here"}</h1>
                </div>
            </div>
        </div>
    );
}

export default WorkshopCard;