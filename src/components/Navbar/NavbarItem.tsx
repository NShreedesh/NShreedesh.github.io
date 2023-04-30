import { useContext } from "react";
import { navbarDataType } from "../../Data/navbarData";
import NavbarContext, { INavbar } from "../../context/NavbarContext";

interface INavbarItem extends navbarDataType {
  navbarItemIndex: number;
}

function NavbarItem({ image, navbarItemIndex }: INavbarItem) {
  const { changeNavbarIndex, selctedNavItemIndex } =
    useContext<INavbar>(NavbarContext);

  function isSelected(): boolean {
    return selctedNavItemIndex === navbarItemIndex;
  }

  return (
    <div
      className={`flex flex-col items-center justify-center w-10 h-10 transition-all duration-300 cursor-pointer bg-slate-300 rounded-xl origin-center hover:opacity-100  
      ${
        isSelected()
          ? "scale-150"
          : "grayscale scale-100 hover:grayscale-0 opacity-80"
      }`}
      onClick={() => changeNavbarIndex!(navbarItemIndex)}
    >
      <img src={image} alt="" className="w-full h-full rounded-lg" />
    </div>
  );
}

export default NavbarItem;
