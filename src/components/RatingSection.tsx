import Paragraph from "./Paragraph";

const RatingSection = () => {
  return (
    <div className="flex flex-col items-center w-full h-auto gap-8 bg-[#261F1F] ">
      {/* rating */}
      <Paragraph text="★★★★★" className="text-2xl text-white pt-15 " />

      {/* Feedback */}
      <Paragraph
        text={
          "TV Internet Zone provided exceptional service! Fast internet and \nreliable cable options made my experience seamless. Highly \nrecommend for anyone looking for quality cosnnectivity."
        }
        className="lg:text-xl md:text-[18px] sm:text-[16px] max-[640px]:text-[15px] font-semibold text-center text-white whitespace-pre-line "
      />

      {/* feedback by */}

      <div className="flex flex-col items-center gap-3">
        <img
          className="object-cover border-4 rounded-full h-22 w-22"
          src="./images/jhonwick.png"
          alt="jhon"
        />
        <Paragraph
          text="Jhon Wick"
          className="text-white font-semibold text-[17px] pb-10"
        />
      </div>
    </div>
  );
};

export default RatingSection;
