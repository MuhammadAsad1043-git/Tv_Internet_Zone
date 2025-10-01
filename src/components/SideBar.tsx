import NavLinks from "./Navlinks";
import { Navlinksdetail } from "../data";
import type {
  MobileSidebarProps,
  NavLinksData,
} from "../interfaces/props.styles";
import { FaTimes } from "react-icons/fa";
import ContactButton from "./Button";

const MobileSidebar = ({ open, onClose }: MobileSidebarProps) => {
  return (
    <div
      className={`fixed top-0 left-0  h-full md:w-80 sm:w-70 max-[640px]:w-65 bg-white shadow-2xl transform transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* Close button */}
      <div className="flex justify-end p-4">
        <FaTimes size={20} className="cursor-pointer" onClick={onClose} />
      </div>

      {/* Nav links */}
      <div className="flex flex-col gap-5 p-6">
        {Navlinksdetail.map(({ href, text }: NavLinksData) => (
          <NavLinks key={href} href={href} text={text} />
        ))}

        {/* Contact button */}
        <ContactButton
          name="+1 (844) 532-5227"
          className="h-12 pl-4 pr-4 text-black bg-transparent border border-black"
        />
      </div>
    </div>
  );
};

export default MobileSidebar;
