import Heading from "./Heading";
import Paragraph from "./Paragraph";
import type { ServicesData } from "../interfaces/props.styles";

const ServiceComponet = ({ heading, para }: ServicesData) => {
  return (
    <div className="w-100 pt-4 ">
      <div className="w-100 h-43 pr-8 pl-8 bg-white/10 items-center justify-center flex flex-col gap-3">
        <Heading
          text={heading}
          className="font-semibold text-white text-[24px]"
        />
        <Paragraph
          text={para}
          className="text-white text-[18px] whitespace-pre-line text-center"
        />
      </div>
    </div>
  );
};

export default ServiceComponet;
