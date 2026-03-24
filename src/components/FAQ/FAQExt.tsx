type FAQType = {
  header: string;
  content: React.ReactNode;
};

function FAQExt({ header, content }: FAQType) {
  return (
    <div className="mx-auto mt-14 w-full max-w-3xl rounded-4xl bg-[#5B96C8] px-6 py-8 text-center text-white shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl sm:px-8 md:px-10">
      <h2 className="text-xl italic md:text-2xl">{header}</h2>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed sm:text-base md:text-lg">
        {content}
      </p>
    </div>
  );
}

export default FAQExt;