import { homeIconsData } from "../data/homeIconsData";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div className="flex items-center justify-center w-full h-screen text-center bg-light xl:text-start dark:bg-dark [transition:background-color_.3s,color_.3s]">
      <div className="flex flex-col items-center max-w-xl gap-12 xl:flex-row xl:max-w-4xl animate-page xl:ml-80 ">
        <div className="flex-shrink-0 ">
          <img
            src="/images/Profile.jpg"
            alt="Profile Image"
            className="h-72 w-72 object-cover object-[0px,-40px] rounded-full animate-blob border-8 border-gray-500 border-opacity-30"
          />
        </div>

        <div className="flex flex-col gap-5 dark:text-white">
          <p className="text-2xl font-extrabold uppercase md:text-5xl whitespace-nowrap">
            Shreedesh Niroula
          </p>

          <div className="text-2xl font-medium">
            <Typewriter
              options={{
                strings: ["Game Developer", "Programmer"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <p className="font-medium text-gray-500 dark:text-gray-400 text-md">
            Creative Programmer based in Nepal and happy to travel all over
            Nepal to Program games.
          </p>
          <div className="flex items-center justify-center gap-3 text-md xl:justify-start">
            {homeIconsData.map((data, index) => {
              return (
                <div
                  key={index}
                  className="transition-transform duration-500 ease-out cursor-pointer hover:-translate-y-1 hover:opacity-70"
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
