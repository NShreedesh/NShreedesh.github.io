import { MdDarkMode } from "react-icons/md";
import { useNavbarContext } from "../context/NavbarContext";
import { useDarkModeContext } from "../context/DarkModeContext";

const hamburgerLineCss = `h-1 w-6 rounded-full bg-black transition duration-[.5s] ease transform duration-300 dark:bg-white`;

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
        <div
          className="flex flex-col items-center justify-center w-10 h-10 gap-1"
          onClick={() => toggleNavbarState?.(!isNavbarActive)}
        >
          <div
            className={`${hamburgerLineCss} ${
              isNavbarActive && "rotate-45 translate-y-2"
            }`}
          ></div>
          <div
            className={`${hamburgerLineCss} ${isNavbarActive && "opacity-0"}`}
          ></div>
          <div
            className={`${hamburgerLineCss} ${
              isNavbarActive && "-rotate-45 -translate-y-2"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
