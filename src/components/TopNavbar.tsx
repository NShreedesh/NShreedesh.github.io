import { MdDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavbarContext } from "../context/NavbarContext";
import { useDarkModeContext } from "../context/DarkModeContext";

function TopNavbar() {
  const { isNavbarActive, toggleNavbarState } = useNavbarContext();
  const { isDarkModeActive, toggleDarkModeActive } = useDarkModeContext();

  return (
    <div className="fixed flex items-center gap-4 text-xl cursor-pointer right-5 top-5 xl:hidden [transition:background-color_.3s,color_.3s] dark:text-white">
      <div onClick={() => toggleDarkModeActive!(!isDarkModeActive)}>
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
