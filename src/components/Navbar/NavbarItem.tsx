import { useContext } from "react";
import { navbarDataType } from "../../Data/navbarData";
import NavbarContext, { INavbar } from "../../context/NavbarContext";

interface INavbarItem extends navbarDataType {
  navbarItemIndex: number;
}

function NavbarItem({ image, navbarItemIndex }: INavbarItem) {
  const { changeNavbarIndex, selctedNavItemIndex } =
    useContext<INavbar>(NavbarContext);
  return (
    <div
      className={`flex flex-col items-center justify-center transition-all duration-300 cursor-pointer  bg-slate-300 rounded-xl opacity-80 grayscale hover:grayscale-0 hover:opacity-100  
      ${selctedNavItemIndex === navbarItemIndex ? "w-16 h-16" : "w-10 h-10"}`}
      onClick={() => changeNavbarIndex!(navbarItemIndex)}
    >
      <img src={image} alt="" className="w-full h-full rounded-lg" />
    </div>
  );
}

export default NavbarItem;
