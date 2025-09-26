import Heading from "./Heading";
import Paragraph from "./Paragraph";
import type { ServicesData } from "../interfaces/props.styles";

const ServiceDetailsCard = ({ heading, para }: ServicesData) => {
  return (
    <div className="flex flex-col items-center h-65 pb-5 bg-white gap-3 lg:w-100 md:w-120 sm:w-110 max-[640px]:w-90">
      <Heading text={heading} className="text-[25px] font-bold pt-6" />
      <Paragraph
        text={para}
        className="pl-2 pr-2 text-[18px] text-justify text-[#56585E]"
      />
    </div>
  );
};

export default ServiceDetailsCard;
