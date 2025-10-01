import type { TextFieldDetail } from "../interfaces/props.styles";

const TextField = ({
  placeholder,
  classname,
  label,
  labelclassname,
}: TextFieldDetail) => {
  return (
    <>
      <div className="flex flex-col gap-0.5 pr-15">
        <label
          className={`text-[15px] ${labelclassname}`}
          htmlFor="ContactInfo"
        >
          {label}
        </label>
        <input
          className={`pl-3 bg-white border-1 border-[#dadce0]  rounded-xl ${classname}`}
          type="text"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default TextField;
