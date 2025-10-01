import ContactButton from "./Button";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import TextField from "./Textfield";

const FooterSection = () => {
  return (
    <div className="flex lg:items-center md:items-center lg:justify-between w-full h-auto lg:gap-3 md:gap-4 sm:gap-5 max-[640px]:gap-5 pt-10 pb-10 pr-20 pl-20 bg-red-400 lg:flex-row md:flec-col sm:flex-col max-[640px]:flex-col">
      {/* Contact div */}

      <div className="flex flex-col items-center justify-center gap-5 pt-2">
        <Heading
          text="Tv Internet Zone"
          className="text-[27px] font-bold text-white"
        />
        <Heading
          text="+1 (844) 532-5227"
          className="text-[22px] font-bold text-white"
        />
        <Paragraph
          text={"Fast and reliable internet services in your \narea."}
          className="text-white text-[20px] whitespace-pre-line text-center"
        />
      </div>
      {/* 24/7 support div */}

      <div className="flex flex-col items-center justify-center gap-5">
        {/* div 1 */}

        <div className="flex flex-col items-center justify-center">
          <Heading
            text="24/ 7 Support"
            className="text-[27px] font-bold text-white"
          />
          <Paragraph
            text={"support@tvinternetzone.com"}
            className="text-white text-[20px] whitespace-pre-line"
          />
        </div>

        {/* div 2 */}

        <div className="flex flex-col items-center justify-center">
          <Heading
            text="Office Hours:"
            className="text-[25px] font-bold text-white"
          />
          <Paragraph
            text={"9 AM to 7 PM EST"}
            className="text-white text-[20px] whitespace-pre-line"
          />
        </div>
      </div>
      {/* term and condition div */}

      <div className="flex md:flex-col sm:flex-col max-[640px]:flex-col gap-5 pt-5 md:text-center sm:items-center max-[640px]:items-center lg:flex">
        <Heading
          text="Terms and condition "
          className="text-[25px] font-bold text-white"
        />

        <TextField
          label="Enter your email address"
          placeholder="Your email for update"
          classname="h-12 md:w-70 max-[640px]:w-80 sm:w-70"
          labelclassname="text-white "
        />
        <div className="flex justify-center">
          <ContactButton
            name="Submit Your Inquiry"
            className="pl-4 pr-4 text-white lg:w-50 md:w-70 sm:w-70 max-[640px]:w-70 h-13"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
