// will make it dynamic and accept parameters from the parent component
function AboutCard() {
    return (
        <div
            className="bg-[#F5F0CD] md:max-w-[750px] sm:max-w-[500px] max-w-[325px] h-auto p-5 mt-3 mx-auto grid md:grid-cols-2 rounded-2xl
        transition-all duration-300 ease-in-out transform hover:scale-105 
        hover:shadow-lg hover:shadow-gray-400"
        >
            <img className="" src="" alt="PlaceHolder"></img>
            <div className="flex flex-col justify-center">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi id quis vitae, asperiores amet voluptatem ad cum
                    exercitationem minima fuga? Ipsum odit repellat dicta
                    perferendis? Quod ratione cupiditate fugit eligendi.
                </p>
            </div>
        </div>
    )
}

export default AboutCard
