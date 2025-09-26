import Heading from "./Heading";
import Paragraph from "./Paragraph";
import TextField from "./Textfield";
import { TextFieldData } from "../data";
import type { TextFieldDetail } from "../interfaces/props.styles";

const ContactSection = () => {
  return (
    <div className="flex flex-col items-center w-full gap-5 bg-white h-200">
      <Heading
        text="Get in Touch with Us"
        className="text-[42px] font-bold text-black pt-8"
      />
      <Paragraph
        text="Reach out for inquiries or support regarding our services."
        className="text-[#56585E] text-xl"
      />

      {/* input section */}
      <div>
        {/* Enter info div */}

        <div className="bg-[#F4F4F4] pb-20 rounded-2xl pl-8 pt-8 flex flex-col gap-8 ">
          {TextFieldData.map(
            ({ label, placeholder, classname }: TextFieldDetail) => (
              <TextField
                placeholder={placeholder}
                label={label}
                classname={classname}
              />
            )
          )}
        </div>

        {/* image div */}
      </div>
    </div>
  );
};

export default ContactSection;
