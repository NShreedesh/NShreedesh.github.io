import { NavLink } from "react-router-dom";
import { navbarData } from "../data/navbardata";

function Navbar() {
  return (
    <div className="flex flex-col justify-center h-screen px-10 w-80 bg-slate-400 gap-14 dark:bg-black">
      <div className="flex flex-col gap-10">
        <h1 className="text-3xl font-extrabold tracking-wider">Nepal</h1>

        <div className="flex flex-col justify-center gap-5">
          {navbarData.map((data, index) => {
            return (
              <NavLink
                to={data.to}
                key={index}
                className="text-gray-600 aria-[current=page]:font-medium aria-[current=page]:text-black flex items-center gap-2 hover:tracking-widest transition-all duration-200"
              >
                {data.icon}
                <h1>{data.title}</h1>
              </NavLink>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col text-sm text-gray-500 whitespace-nowrap">
        <p>@2023 Nepal</p>
        <p className="italic">
          Created by {""}
          <span className="text-black text-[14px] cursor-pointer hover:tracking-widest hover:font-bold transition-all duration-200">
            Shreedesh
          </span>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
