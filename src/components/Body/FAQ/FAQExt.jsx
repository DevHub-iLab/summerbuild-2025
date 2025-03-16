function FAQExt(props) {
    return (
        <div className="bg-sb-blue-300 mx-auto mt-20 w-[325px] transform flex-col rounded-xl p-6 text-center text-[15px] transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-lg hover:shadow-gray-400 sm:w-[600px] sm:text-[20px] md:w-[750px] md:text-[25px]">
            <h1 className="pb-2 text-center font-semibold text-white italic">
                {props.header}
            </h1>
            <p className="ml-[20px] pt-2 pr-5 text-[13px] text-white sm:ml-[25px] sm:text-[15px] md:ml-[30px] md:text-[18px]">
                {props.content}
            </p>
        </div>
    )
}

export default FAQExt
