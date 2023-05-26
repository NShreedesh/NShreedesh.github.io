import { MdDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavbarContext } from "../context/NavbarContext";

function TopNavbar() {
  const { isNavbarActive, toggleNavbarState } = useNavbarContext();

  return (
    <div className="fixed flex items-center gap-4 text-xl cursor-pointer right-5 top-5 xl:hidden">
      <div>
        <MdDarkMode />
      </div>
      <div
        onClick={() => {
          toggleNavbarState?.(!isNavbarActive);
        }}
      >
        <GiHamburgerMenu />
      </div>
    </div>
  );
}

export default TopNavbar;
