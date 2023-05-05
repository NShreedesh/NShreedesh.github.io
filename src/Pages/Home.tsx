import { useContext } from "react";
import ScrollContext, { IScroll } from "../context/ScrollContext";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { CgFacebook } from "react-icons/cg";

function Home() {
  const { scrollValue } = useContext<IScroll>(ScrollContext);

  return (
    <div
      className="min-w-[100%] transition-all duration-500 flex justify-center items-center px-20"
      style={{
        translate: `${scrollValue}vw`,
      }}
    >
      <div className="flex flex-col gap-8">
        <p className="text-4xl font-bold text-center uppercase">
          Game Developer
        </p>
        <p className="text-center text-gray-600">
          Hello, and welcome to my website portfolio! My name is Shreedesh
          Niroula, and I'm a game developer with over 3 years of experience
          creating engaging and immersive gaming experiences. On this website,
          you'll find a collection of some of my recent work, as well as more
          information about my skills, experience, and interests.
        </p>
        <div className="flex items-center justify-center gap-2">
          <div className="p-2 text-white rounded-full cursor-pointer bg-slate-950">
            <div>
              <FaLinkedinIn />
            </div>
          </div>
          <div className="p-2 text-white rounded-full cursor-pointer bg-slate-950">
            <div>
              <IoIosMail />
            </div>
          </div>
          <div className="p-2 text-white rounded-full cursor-pointer bg-slate-950">
            <div>
              <CgFacebook />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
