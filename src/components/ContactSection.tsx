import Heading from "./Heading";
import Paragraph from "./Paragraph";
import TextField from "./Textfield";
import { TextFieldData } from "../data";
import type { TextFieldDetail } from "../interfaces/props.styles";
import ContactButton from "./Button";

const ContactSection = () => {
  return (
    <div className="flex flex-col items-center w-full h-auto gap-6 bg-white ">
      <Heading
        text="Get in Touch with Us"
        className="text-[42px] font-bold text-black pt-8"
      />
      <Paragraph
        text="Reach out for inquiries or support regarding our services."
        className="text-[#56585E] text-xl"
      />

      {/* input section */}
      <div
        className="flex lg:justify-center md:items-center sm:items-center max-[640px]:items-center
       max-[640px]:flex-col w-auto md:flex-col lg:flex-row sm:flex-col md:gap-4 sm:gap-3 max-[640px]:gap-3 pb-7"
      >
        {/* Enter info div */}

        <div className="bg-[#F4F4F4] pb-10 rounded-2xl pl-8 pt-8 flex flex-col gap-8 ">
          {TextFieldData.map(
            ({ label, placeholder, classname }: TextFieldDetail) => (
              <TextField
                placeholder={placeholder}
                label={label}
                classname={classname}
              />
            )
          )}
          <ContactButton
            name="Submit Your Inquiry"
            className="pl-4 pr-4 text-white w-50 h-13"
          />
        </div>

        {/* image div */}

        <div className="lg:pt-10 lg:w-115 lg:h-110 sm:h-95 md:h-100 max-[640px]:h-90 sm:w-110 md:w-120 max-[640px]:w-95 pb-10">
          <img
            className="w-auto h-full lg:rounded-br-2xl lg:rounded-tr-2xl md:rounded-2xl sm:rounded-2xl max-[640px]:rounded-2xl"
            src="./images/contactSection.png"
            alt="contactsection"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
