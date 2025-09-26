import type { TextFieldDetail } from "../interfaces/props.styles";

const TextField = ({ placeholder, classname, label }: TextFieldDetail) => {
  return (
    <>
      <div className="flex flex-col gap-0.5 pr-20">
        <label className="text-[15px]" htmlFor="ContactInfo">
          {label}
        </label>
        <input
          className={`pl-3 bg-white border-1 border-[#dadce0] w-120 rounded-xl ${classname}`}
          type="text"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default TextField;
