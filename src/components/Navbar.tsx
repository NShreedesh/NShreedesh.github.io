import { Link } from "react-router-dom";
import { navbarData } from "../data/navbardata";

function Navbar() {
  return (
    <div className="flex flex-col h-screen justify-center gap-14 dark:bg-black">
      <div className="flex flex-col gap-10">
        <h1 className="text-3xl font-extrabold tracking-wider">Nepal</h1>

        <div className="flex flex-col justify-center gap-5">
          {navbarData.map((data, index) => {
            return (
              <Link
                to={data.to}
                key={index}
                className="flex items-center gap-2"
              >
                {data.icon}
                <h1>{data.title}</h1>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col text-sm text-gray-500">
        <p>@2023 Nepal</p>
        <p className="italic">
          Created by {""}
          <span className="text-black text-[14px]">Shreedesh</span>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
