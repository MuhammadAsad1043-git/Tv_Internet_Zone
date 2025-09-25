import Heading from "./Heading";
import { AboutSectionDetail } from "../data/AboutSectionData";
import Paragraph from "./Paragraph";
import { AboutSectionServiceDetail } from "../data/AboutSectionData";
import type { AboutSectionServies } from "../interfaces/props.styles";
import ContactButton from "./Button";
import TrustedClientComp from "./TrustedClientComp";

const AboutSection = () => {
  return (
    <div className="w-full flex pl-18 max-[640px]:pr-14 items-center lg:justify-evenly lg:gap-10 md:flex-col lg:flex-row sm:flex-col md:justify-center sm:justify-center max-[640px]:flex-col max-[640px]:justify-center">
      {/* About Section */}
      <div className="flex flex-col gap-8 pt-30 lg:pb-30 md:pb-20 sm:pb-15 max-[640px]:pb-12">
        <Heading
          className="text-[#190157] tracking-normal font-bold lg:text-5xl md:text-4xl sm:text-3xl max-[640px]:text-3xl font-Roboto, sans-serif "
          text={AboutSectionDetail.heading}
        />
        <Paragraph
          text={AboutSectionDetail.para1}
          className="tracking-normal lg:whitespace-pre-line sm:whitespace-pre-line md:whitespace-pre-line text-[#56585E] font-DM Sans, sans-serif lg:text-[15.5px] md:text-[18px] sm:text-[18px] max-[640px]:text-[15px]"
        />
        <Paragraph
          text={AboutSectionDetail.para2}
          className="tracking-normal lg:whitespace-pre-line sm:whitespace-pre-line md:whitespace-pre-line text-[#56585E] font-DM Sans, sans-serif lg:text-[17px] md:text-[18px] sm:text-[18px] max-[640px]:text-[15px]"
        />
        <div>
          {AboutSectionServiceDetail.map(({ para }: AboutSectionServies) => (
            <>
              <div className="flex items-end gap-2 ">
                <div>
                  <Paragraph
                    text=". "
                    className="text-4xl font-bold md:text-3xl sm:text-2xl max-[640px]:text-xl"
                  />
                </div>
                <div>
                  <Paragraph
                    text={para}
                    className="tracking-normal lg:whitespace-pre-line sm:whitespace-pre-line md:whitespace-pre-line text-[#56585E] font-DM Sans, sans-serif lg:text-[17px] md:text-[18px] sm:text-[18px] max-[640px]:text-[15px]"
                  />
                </div>
              </div>
            </>
          ))}
        </div>

        {/* button */}
        <div className="w-100 flex justify-center md:justify-center sm:justify-center max-[640px]:items-center ">
          <ContactButton
            name="Call Us "
            className="font-normal text-black bg-transparent border border-black h-13 w-80 "
          />
        </div>
      </div>

      {/* About section image */}
      <div className="pb-14 lg:w-117 bg-[url('/images/tabletimage.png')] bg-cover lg:h-130 rounded-2xl md:w-170 sm:h-100 sm:w-130 max-[640px]:w-90 max-[640px]:h-100 flex items-end">
        <TrustedClientComp />
      </div>
    </div>
  );
};

export default AboutSection;
