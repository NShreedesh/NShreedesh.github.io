import { MdDarkMode } from "react-icons/md";
import { useDarkModeContext } from "../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkModeActive, toggleDarkModeActive } = useDarkModeContext();

  return (
    <div
      className="absolute right-0 items-center justify-center hidden h-12 text-2xl bg-gray-400 cursor-pointer w-14 rounded-s-full -h-1/2 top-1/2 xl:flex"
      onClick={() => toggleDarkModeActive!(!isDarkModeActive)}
    >
      <MdDarkMode />
    </div>
  );
}

export default DarkModeToggle;
