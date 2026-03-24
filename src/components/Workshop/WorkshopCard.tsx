type WorkshopCardProps = {
  imageSrc: string;
  title: string;
  color?: string;
  mobile?: boolean;
};

export default function WorkshopCard({
  imageSrc,
  title,
  color = "#FADA7A",
  mobile = false,
}: WorkshopCardProps) {
  return (
    <div className="flex items-center justify-center py-2">
      <div
        className={`mx-auto rounded-2xl text-center transition-transform duration-300 hover:animate-[wiggle_1s_ease-in-out] ${
          mobile
            ? "w-[210px] px-4 pt-4 pb-5 shadow-[0_10px_25px_rgba(0,0,0,0.12)]"
            : "w-56 px-5 pt-5 pb-6 shadow-xl sm:w-48 md:w-60"
        }`}
        style={{ backgroundColor: color }}
      >
        <img
          className={`mx-auto object-contain ${
            mobile ? "h-28 w-full" : "w-full px-7 py-4"
          }`}
          src={imageSrc}
          alt={title}
        />

        <h2
          className={`text-center font-medium leading-snug text-[#1E1E1E] ${
            mobile ? "mt-3 text-[15px]" : "px-6 pt-1 pb-2 text-xl md:text-2xl"
          }`}
        >
          <span className="block">{title}</span>
          <span className={`${mobile ? "mt-1 text-[15px]" : "mt-1 text-lg md:text-xl"} block`}>
            Workshop
          </span>
        </h2>
      </div>
    </div>
  );
}