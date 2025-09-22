import { HeroHeading, Heropara2, HeroHeading2 } from "../data/HeroSectionData";
import ContactButton from "./Button";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import ServiceComponet from "./ServicesComponent";
import { ServiceCardData } from "../data";
import type { ServicesData } from "../interfaces/props.styles";

const HeroSection = () => {
  return (
    <div className="w-full h-auto pb-8 bg-no-repeat bg-cover position-relative bg-origin-border bg-[url('/images/herobg.png')] bg-bottom ">
      {/* div for black bg on image */}
      <div className="w-full  bg-[rgba(0,0,0,0.1)]  ">
        {/* Heading */}
        <Heading
          className="text-white font-bold lg:text-[35px] whitespace-pre-line md:text-[28px] sm:text-[25px] max-[640px]:text-[25px] font-Roboto, sans-serif pt-5  flex justify-center lg:wrap-break-word"
          text={HeroHeading.text}
        />

        {/* Div 2 */}
        <div className="flex flex-col gap-3 justify-center items-center">
          <Heading
            className="text-white font-bold lg:text-[65px] text-center font-DM Sans, sans-serif wrap-break-word md:text-[52px] sm:text-[42px] max-[640px]:text-[38px] whitespace-pre-line"
            text={HeroHeading2.text}
          />
          <Paragraph
            className="text-white lg:text-[23px] font-Roboto, sans-serif text-center whitespace-pre-line md:text-[21px] sm:text-[19px] max-[640px]:text-[17px]"
            text={Heropara2.text}
          />

          {/* button */}
          <ContactButton className="border-white border font-medium h-13 pr-6 pl-6 text-white bg-transparent" />
        </div>

        {/* Service cards */}
        <div className="flex gap-3 justify-center flex-col lg:flex-row items-center">
          {ServiceCardData.map(({ heading, para }: ServicesData) => (
            <ServiceComponet heading={heading} para={para} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
