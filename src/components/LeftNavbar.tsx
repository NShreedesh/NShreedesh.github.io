import { NavLink } from "react-router-dom";
import { navbarData } from "../data/navbardata";
import { useNavbarContext } from "../context/NavbarContext";

function LeftNavbar() {
  const { isNavbarActive } = useNavbarContext();

  return (
    <div
      className={`fixed flex-shrink-0 bg-white flex-col justify-center flex h-screen px-10 [transition:margin_.7s,background-color_.3s,color_.3s] linear w-72 gap-14 dark:bg-black z-20 xl:visible ${
        isNavbarActive ? "" : "-ml-80 xl:ml-0"
      }`}
    >
      <div className="flex flex-col gap-10">
        <h1 className="text-3xl font-extrabold tracking-widest cursor-pointer dark:text-white">
          Portfolio
        </h1>

        <div className="flex flex-col justify-center gap-5">
          {navbarData.map((data, index) => {
            return (
              <NavLink
                to={data.to}
                key={index}
                className="text-gray-600 dark:text-gray-400 aria-[current=page]:font-medium aria-[current=page]:text-black dark:aria-[current=page]:text-white flex items-center gap-2 hover:tracking-widest transition-all duration-200 tracking-wide"
              >
                {data.icon}
                <h1>{data.title}</h1>
              </NavLink>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
        <p>@2023 Nepal</p>
        <p className="italic">
          Created by {""}
          <span className="text-black text-[14px] dark:text-gray-200 cursor-pointer hover:tracking-widest hover:font-bold transition-all duration-200">
            Shreedesh
          </span>
        </p>
      </div>
    </div>
  );
}

export default LeftNavbar;
