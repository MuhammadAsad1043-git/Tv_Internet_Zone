import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { ServicesSectionPara, ServicePicCardInfo } from "../data";
import ServicesPicCard from "./ServicesPicCard";
import type { ServicePicCardDetails } from "../interfaces/props.styles";

const ServicesSection = () => {
  return (
    <div className="flex flex-col pb-8 lg:gap-7 md:gap-7 sm:gap-6 items-center w-full bg-red-400 h-auto sm:mt-3 max-[640px]:mt-4 lg:pt-8 md:pt-8 sm:pt-7 max-[640px]:pt-7 ">
      {/* heading and para div */}
      <div>
        <Heading
          text="Our Services"
          className="lg:text-[45px] font-bold text-white text-center md:text-[40px] sm:text-[38px] max-[640px]:text-[35px] "
        />
        <Paragraph
          text={ServicesSectionPara.text}
          className="text-center text-white lg:text-[20px] md:text-[19px] whitespace-pre-line sm:text-[18px] max-[640px]:text-[16px]"
        />
      </div>
      <div className="flex justify-center w-full lg:gap-3 md:gap-5 sm:gap-4 md:flex-col sm:flex-col lg:flex-row md:items-center sm:items-center max-[640px]:flex-col max-[640px]:gap-4 max-[640px]:items-center">
        {ServicePicCardInfo.map(
          ({ heading, para, path }: ServicePicCardDetails) => (
            <ServicesPicCard heading={heading} para={para} path={path} />
          )
        )}
      </div>
    </div>
  );
};

export default ServicesSection;
