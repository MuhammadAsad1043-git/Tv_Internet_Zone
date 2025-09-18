import type { NavLinksData } from "../interfaces/props.styles";

const NavLinks = ({ href, text }: NavLinksData) => {
  return (
    <a
      className="cursor-pointer  hover:text-red-500 hover:underline text-[16px] "
      href={href}
    >
      {text}
    </a>
  );
};

export default NavLinks;
