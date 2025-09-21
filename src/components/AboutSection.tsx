import Heading from "./Heading";
import { AboutSectionDetail } from "../data/AboutSectionData";
import Paragraph from "./Paragraph";
import { AboutSectionServiceDetail } from "../data/AboutSectionData";
import type { AboutSectionServies } from "../interfaces/props.styles";

const AboutSection = () => {
  return (
    <div className="w-full flex items-center justify-evenly">
      {/* About Section */}
      <div className="flex flex-col gap-10 pt-30 pb-30">
        <Heading
          className="text-[#190157] tracking-normal font-bold lg:text-5xl md:text-4xl sm:text-3xl max-[640px]:text-2xl font-Roboto, sans-serif "
          text={AboutSectionDetail.heading}
        />
        <Paragraph
          text={AboutSectionDetail.para1}
          className="tracking-normal whitespace-pre-line text-[#56585E] font-DM Sans, sans-serif"
        />
        <Paragraph
          text={AboutSectionDetail.para2}
          className="tracking-normal whitespace-pre-line text-[#56585E] font-DM Sans, sans-serif"
        />
        <div>
          {AboutSectionServiceDetail.map(({ para }: AboutSectionServies) => (
            <>
              <div className="flex gap-2 items-end ">
                <div>
                  <Paragraph text=". " className="text-4xl font-bold" />
                </div>
                <div>
                  <Paragraph
                    text={para}
                    className="tracking-normal whitespace-pre-line text-[#56585E] font-DM Sans, sans-serif "
                  />
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      {/* About section image */}
      <img
        className="h-150 rounded-3xl"
        src="./images/tabletimage.png"
        alt="tablet"
      />
    </div>
  );
};

export default AboutSection;
