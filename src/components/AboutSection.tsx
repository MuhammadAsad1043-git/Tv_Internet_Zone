import Heading from "./Heading";
import { AboutSectionDetail } from "../data/AboutSectionData";
import Paragraph from "./Paragraph";
import { AboutSectionServiceDetail } from "../data/AboutSectionData";
import type { AboutSectionServies } from "../interfaces/props.styles";
import ContactButton from "./Button";

const AboutSection = () => {
  return (
    <div className="w-full flex items-center lg:justify-around  md:flex-col lg:flex-row sm:flex-col md:justify-center sm:justify-center ">
      {/* About Section */}
      <div className="flex flex-col gap-10 pt-30 pb-30">
        <Heading
          className="text-[#190157] tracking-normal font-bold lg:text-5xl md:text-4xl sm:text-3xl max-[640px]:text-2xl font-Roboto, sans-serif "
          text={AboutSectionDetail.heading}
        />
        <Paragraph
          text={AboutSectionDetail.para1}
          className="tracking-normal whitespace-pre-line text-[#56585E] font-DM Sans, sans-serif lg:text-[18px] md:text-[16px] sm:text-[15px] max-[640px]:text-[15px]"
        />
        <Paragraph
          text={AboutSectionDetail.para2}
          className="tracking-normal whitespace-pre-line text-[#56585E] font-DM Sans, sans-serif lg:text-[18px] md:text-[16px] sm:text-[15px] max-[640px]:text-[15px]"
        />
        <div>
          {AboutSectionServiceDetail.map(({ para }: AboutSectionServies) => (
            <>
              <div className="flex gap-2 items-end ">
                <div>
                  <Paragraph
                    text=". "
                    className="text-4xl font-bold md:text-3xl sm:text-2xl max-[640px]:text-xl"
                  />
                </div>
                <div>
                  <Paragraph
                    text={para}
                    className="tracking-normal whitespace-pre-line text-[#56585E] font-DM Sans, sans-serif lg:text-[18px] md:text-[16px] sm:text-[15px] max-[640px]:text-[15px]"
                  />
                </div>
              </div>
            </>
          ))}
        </div>

        {/* button */}
        <div className="w-100 flex justify-center">
          <ContactButton
            name="Call Us "
            className="bg-transparent border-black text-black border font-normal h-13 w-80 "
          />
        </div>
      </div>

      {/* About section image */}
      <img
        className="lg:h-135 md:h-110 rounded-3xl"
        src="./images/tabletimage.png"
        alt="tablet"
      />
    </div>
  );
};

export default AboutSection;
