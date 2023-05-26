import { MdDarkMode } from "react-icons/md";
import { useDarkModeContext } from "../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkModeActive, toggleDarkModeActive } = useDarkModeContext();

  return (
    <div
      className="fixed right-0 items-center justify-center hidden h-12 text-2xl bg-gray-400 cursor-pointer w-14 rounded-s-full -h-1/2 top-1/2 xl:flex [transition:background-color_.3s,color_.3s] dark:text-white dark:bg-gray-700 z-10"
      onClick={() => toggleDarkModeActive!(!isDarkModeActive)}
    >
      <MdDarkMode />
    </div>
  );
}

export default DarkModeToggle;
