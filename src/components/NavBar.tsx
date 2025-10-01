import NavLinks from "./Navlinks";
import { Navlinksdetail } from "../data";
import type { NavLinksData } from "../interfaces/props.styles";
import { FaBars } from "react-icons/fa";
import ContactButton from "./Button";
import React from "react";
import MobileSidebar from "./SideBar";

const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="flex items-center justify-between w-full gap-4 pl-2 lg:justify-center lg:shrink-0 shrink-0 pr-14">
      {/* logo Image */}

      <div className="w-auto">
        <img
          className="h-17 md:h-17 lg:h-18 lg:w-40"
          src="/images/internetlogo.png"
          alt="logo"
        />
      </div>

      {/* Nav Links */}

      <div className="hidden lg:flex lg:gap-5 lg:shrink-0">
        {Navlinksdetail.map(({ href, text }: NavLinksData) => (
          <NavLinks href={href} text={text} />
        ))}
      </div>

      {/* Contact Button */}

      <div className="hidden lg:block lg:shrink-0">
        <ContactButton
          name="+1 (844) 532-5227"
          className="pl-4 pr-4 text-white h-13"
        />
      </div>

      {/* Menu icon for mubl */}

      <div className="w-5 lg:hidden shrink-0" onClick={handleOpen}>
        <FaBars size={22} />
      </div>
      <MobileSidebar open={open} onClose={handleClose} />
    </div>
  );
};
export default NavBar;
