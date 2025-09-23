import Heading from "./Heading";
import Paragraph from "./Paragraph";

const TrustedClientComp = () => {
  return (
    <div className="bg-black lg:h-30 lg:w-100 flex justify-around items-center lg:translate-x-[-50px] md:h-30 md:translate-x-[-80px] sm:h-20 sm:w-80 sm:translate-x-[-80px] max-[640px]:translate-x-[-60px] ">
      {/* clients data */}
      <div>
        <Heading
          className="text-white text-5xl font-bold sm:3xl"
          text="189K+"
        />
        <Paragraph className="text-white text-xl font-normal" text="Clients" />
      </div>

      {/* trusted Provider */}
      <div>
        <Heading className="text-white text-5xl font-bold sm:3xl" text="56K" />
        <Paragraph
          className="text-white text-xl font-normal"
          text="Trusted Provider

"
        />
      </div>
    </div>
  );
};

export default TrustedClientComp;
