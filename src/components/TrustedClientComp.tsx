import Heading from "./Heading";
import Paragraph from "./Paragraph";

const TrustedClientComp = () => {
  return (
    <div className="bg-black lg:h-30 lg:w-100 flex justify-around items-center lg:translate-x-[-50px] md:h-30 md:translate-x-[-80px] sm:h-20 sm:w-80 sm:translate-x-[-80px] max-[640px]:h-18 max-[640px]:w-60  max-[640px]:translate-x-[-40px] max-[640px]:gap-4 ">
      {/* clients data */}
      <div>
        <Heading
          className="text-white text-5xl font-bold sm:text-3xl max-[640px]:text-2xl"
          text="189K+"
        />
        <Paragraph
          className="text-xl font-normal text-white sm:text-[18px] max-[640px]:text-[16px]"
          text="Clients"
        />
      </div>

      {/* trusted Provider */}
      <div>
        <Heading
          className="text-5xl font-bold text-white sm:3xl max-[640px]:text-2xl"
          text="56K"
        />
        <Paragraph
          className="text-xl font-normal text-white sm:text-[18px] max-[640px]:text-[15px]"
          text="Trusted Provider

"
        />
      </div>
    </div>
  );
};

export default TrustedClientComp;
