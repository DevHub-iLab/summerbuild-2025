type FAQType = {
  header: string;
  content: React.ReactNode;
};

function FAQExt(props: FAQType) {
  return (
    <div className="bg-sb-blue-300 mx-auto mt-20 w-81.25 transform flex-col rounded-xl p-6 text-center text-[15px] transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-lg hover:shadow-gray-400 sm:w-150 sm:text-[20px] md:w-187.5 md:text-[25px]">
      <h2 className="pb-2 text-center text-white italic">
        {props.header}
      </h2>
      <p className="ml-5 pt-2 pr-5 text-[13px] text-white sm:ml-6.25 sm:text-[15px] md:ml-7.5 md:text-[18px]">
        {props.content}
      </p>
    </div>
  );
}

export default FAQExt;
