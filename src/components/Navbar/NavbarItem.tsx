import { Dispatch } from "react";
import { navbarDataType } from "../../Data/navbarData";

interface INavbarItem extends navbarDataType {
  isSelectedNavbar: boolean;
  setSelectedNavbarItem: Dispatch<React.SetStateAction<number>>;
  navbarItemIndex: number;
}

function NavbarItem({
  image,
  isSelectedNavbar,
  setSelectedNavbarItem,
  navbarItemIndex,
}: INavbarItem) {
  return (
    <div
      className={`flex flex-col items-center justify-center transition-all duration-300 cursor-pointer  bg-slate-300 rounded-xl opacity-80 grayscale hover:grayscale-0 hover:opacity-100  
      ${isSelectedNavbar ? "w-16 h-16" : "w-10 h-10"}`}
      onClick={() => setSelectedNavbarItem(navbarItemIndex)}
    >
      <img src={image} alt="" className="w-full h-full rounded-lg" />
    </div>
  );
}

export default NavbarItem;
