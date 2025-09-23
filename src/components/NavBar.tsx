import NavLinks from "./Navlinks";
import { Navlinksdetail } from "../data";
import type { NavLinksData } from "../interfaces/props.styles";
import { FaBars } from "react-icons/fa";
import ContactButton from "./Button";

const NavBar = () => {
  return (
    <div className="w-full flex items-center gap-4 lg:justify-center lg:shrink-0 shrink-0 justify-between pl-2 pr-14">
      {/* logo Image */}

      <div className="w-auto">
        <img
          className="h-17 md:h-17 lg:h-18 lg:w-40"
          src="/images/internetlogo.png"
          alt="logo"
        />
      </div>

      {/* Nav Links */}

      <div className="lg:flex lg:gap-5 hidden lg:shrink-0">
        {Navlinksdetail.map(({ href, text }: NavLinksData) => (
          <NavLinks href={href} text={text} />
        ))}
      </div>

      {/* Contact Button */}

      <div className="hidden lg:block lg:shrink-0">
        <ContactButton className="text-white h-13 pr-4 pl-4" />
      </div>

      {/* Menu icon for mubl */}

      <div className="lg:hidden w-5 shrink-0">
        <FaBars size={22} />
      </div>
    </div>
  );
};
export default NavBar;
