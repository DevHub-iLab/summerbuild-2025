function FAQExt(props) {
    return (
        <div className="flex-col rounded-xl md:text-[25px] sm:text-[20px] text-[15px] text-center bg-[rgb(245,240,205)] mt-20 md:w-[750px] sm:w-[600px] w-[325px] p-6 mx-auto transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-gray-400">
            <h1 className="pb-2 font-semibold text-center italic text-[#81BFDA]">
                {props.header}
            </h1>
            <p className="md:text-[18px] sm:text-[15px] text-[13px] md:ml-[30px] sm:ml-[25px] ml-[20px] pt-2 pr-5">
                {props.content}
            </p>

        </div>
    );
}

export default FAQExt;