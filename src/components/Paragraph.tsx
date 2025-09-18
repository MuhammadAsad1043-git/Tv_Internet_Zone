import type { ParaDetails } from "../interfaces/props.styles";

const Paragraph = ({ text, className }: ParaDetails) => {
  return <p className={`${className}`}>{text}</p>;
};

export default Paragraph;
