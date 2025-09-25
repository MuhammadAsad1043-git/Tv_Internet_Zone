import Heading from "./Heading";
import Paragraph from "./Paragraph";
import type { ServicePicCardDetails } from "../interfaces/props.styles";

const ServicesPicCard = ({ heading, para, path }: ServicePicCardDetails) => {
  return (
    <div className="flex flex-col items-center pb-10 bg-white gap-7 rounded-t-2xl lg:w-100 md:w-120 sm:w-110 max-[640px]:w-90">
      <img
        className="w-full lg:h-60 md:70 sm:h-65 rounded-t-2xl max-[640px]:h-60"
        src={path}
        alt={heading}
      />
      <Heading text={heading} className="text-[24px] font-bold" />
      <Paragraph
        text={para}
        className="pl-5 pr-5 text-[18px] text-center text-[#56585E]"
      />
    </div>
  );
};

export default ServicesPicCard;
