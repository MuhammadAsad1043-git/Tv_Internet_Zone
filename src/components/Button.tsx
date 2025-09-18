import type { ButtonClass } from "../interfaces/props.styles";

const ContactButton = ({ className }: ButtonClass) => {
  return (
    <button
      className={`cursor-pointer rounded-t-[50px] rounded-b-[50px] h-13 bg-black text-white pr-6 pl-6 lg:text-[18px] font-[700] max-[1207px]:text-[15px] ${className}`}
    >
      +1 (844) 532-5227
    </button>
  );
};

export default ContactButton;
