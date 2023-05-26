import { homeIconsData } from "../data/homeIconsData";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div className="flex items-center justify-center w-full h-screen ">
      <div className="flex items-center max-w-4xl gap-12 ">
        <div>
          <img
            src="/images/Profile.jpg"
            alt="Profile Image"
            className="object-cover w-[400px] h-[400px]"
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
            Creative Photographer based in New York and happy to travel all over
            Europe to capture photos.
          </p>
          <div className="flex items-center gap-3 text-lg">
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
