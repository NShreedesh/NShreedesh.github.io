import { MdDarkMode } from "react-icons/md";

function DarkModeToggle() {
  return (
    <div className="absolute right-0 flex items-center justify-center h-12 text-2xl bg-gray-400 cursor-pointer w-14 rounded-s-full -h-1/2 top-1/2">
      <MdDarkMode />
    </div>
  );
}

export default DarkModeToggle;
