import type { ButtonClass } from "../interfaces/props.styles";

const ContactButton = ({ className, name }: ButtonClass) => {
  return (
    <button
      className={`cursor-pointer rounded-t-[50px] rounded-b-[50px] bg-black lg:text-[18px] font-[700] max-[1207px]:text-[15px] ${className}`}
    >
      {name}
      +1 (844) 532-5227
    </button>
  );
};

export default ContactButton;
