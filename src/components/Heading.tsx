import type { HeadingDetails } from "../interfaces/props.styles";

const Heading = ({ text, className }: HeadingDetails) => {
  return <h1 className={` ${className}`}>{text}</h1>;
};

export default Heading;
