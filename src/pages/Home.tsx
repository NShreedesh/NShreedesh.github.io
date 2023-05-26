import { homeIconsData } from "../data/homeIconsData";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div className="flex items-center justify-center w-full h-screen text-center bg-gray-100 lg:text-start">
      <div className="flex flex-col items-center max-w-xl gap-12 lg:flex-row lg:max-w-4xl">
        <div>
          <img
            src="/images/Profile.jpg"
            alt="Profile Image"
            className="h-80 w-80 object-cover object-[0px,-40px] bg-red-400 rounded-full"
          />
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-5xl font-extrabold uppercase whitespace-nowrap">
            Shreedesh Niroula
          </p>

          <p className="text-2xl font-medium">
            <Typewriter
              options={{
                strings: ["Game Developer", "Programmer"],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
          <p className="font-medium text-gray-500 text-md">
            Creative Programmer based in Nepal and happy to travel all over
            Nepal to Program games.
          </p>
          <div className="flex items-center justify-center gap-3 text-lg lg:justify-start">
            {homeIconsData.map((data, index) => {
              return (
                <div
                  key={index}
                  className="transition-transform duration-500 cursor-pointer hover:-translate-y-1 hover:opacity-70"
                >
                  {data.icon}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
