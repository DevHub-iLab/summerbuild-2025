type WorkshopCardProps = {
  imageSrc: string;
  title: string;
  color?: string;
};

export default function WorkshopCard({
  imageSrc,
  title,
  color = "#FADA7A",
}: WorkshopCardProps) {
  return (
    <div className="flex items-center justify-center perspective-[1000px]">
      <div
        className="mx-auto w-56 rounded-2xl text-center shadow-xl transition-transform duration-300 hover:animate-[wiggle_1s_ease-in-out] sm:w-48 md:w-60"
        style={{
          backgroundColor: color,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="backface-hidden">
          <img
            className="w-full px-7 py-4"
            src={imageSrc}
            alt={title}
          />
          <h2 className="px-6 pt-1 pb-6 text-xl leading-normal md:text-2xl">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
}