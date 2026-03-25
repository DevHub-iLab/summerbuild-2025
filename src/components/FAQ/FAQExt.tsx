type FAQType = {
  header: string;
  content: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
};

function FAQExt({ header, content, imageSrc, imageAlt }: FAQType) {
  return (
    <div className="mx-auto mt-14 w-full max-w-4xl rounded-4xl bg-[#5B96C8] px-6 py-4 text-white shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl sm:px-8 md:px-10">
      <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between md:gap-8">
        {/* Text */}
        <div className="text-center md:max-w-2xl md:text-left">
          <h2 className="text-xl font-semibold text-black md:text-2xl">
            {header}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed sm:text-base md:mx-0 md:text-lg">
            {content}{" "}
            <span className="font-semibold text-[#f0ce60]">
              devhubilab@e.ntu.edu.sg.
            </span>
          </p>
        </div>

        {/* Image */}
        {imageSrc ? (
          <div className="shrink-0">
            <img
              src={imageSrc}
              alt={imageAlt || "FAQ illustration"}
              className="h-auto w-36 md:w-44 lg:w-52"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default FAQExt;