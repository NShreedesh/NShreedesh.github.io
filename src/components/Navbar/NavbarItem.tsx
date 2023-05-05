import { useContext, useEffect } from "react";
import { navbarDataType } from "../../Data/navbarData";
import NavbarContext, { INavbar } from "../../context/NavbarContext";
import ScrollContext, { IScroll } from "../../context/ScrollContext";

interface INavbarItem extends navbarDataType {
  navbarItemIndex: number;
}

function NavbarItem({ image, navbarItemIndex }: INavbarItem) {
  const { changeNavbarIndex, selctedNavItemIndex } =
    useContext<INavbar>(NavbarContext);
  const { changeScrollValue } = useContext<IScroll>(ScrollContext);

  useEffect(() => {
    changeScrollValue?.(-100 * selctedNavItemIndex);
  }, [selctedNavItemIndex]);

  function isSelected(): boolean {
    return selctedNavItemIndex === navbarItemIndex;
  }

  function handleNavbarChange() {
    changeNavbarIndex!(navbarItemIndex);
  }

  return (
    <div
      className={`flex flex-col items-center justify-center w-10 h-10 transition-all duration-300 cursor-pointer bg-slate-300 rounded-xl origin-center hover:opacity-100  
      ${
        isSelected()
          ? "scale-150"
          : "grayscale scale-100 hover:grayscale-0 opacity-80"
      }`}
      onClick={() => handleNavbarChange()}
    >
      <img src={image} alt="" className="w-full h-full rounded-lg" />
    </div>
  );
}

export default NavbarItem;
