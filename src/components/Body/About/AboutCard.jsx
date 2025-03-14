// will make it dynamic and accept parameters from the parent component
function AboutCard() {
    return (
        <div className="mx-auto mt-3 grid h-auto max-w-[325px] transform rounded-2xl bg-[#F5F0CD] p-5 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-gray-400 sm:max-w-[500px] md:max-w-[750px] md:grid-cols-2">
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
