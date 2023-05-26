import { skillIconsData } from "../data/skillIcons";

function About() {
  return (
    <div className="flexjustify-center w-full min-h-screen bg-light xl:text-start dark:bg-dark [transition:background-color_.3s,color_.3s]">
      <div className="flex flex-col gap-10 mt-16 xl:max-w-4xl animate-page px-5 xl:px-0 xl:ml-80">
        <div className="flex flex-col gap-2">
          <p className="bg-[#EEEEEE] dark:bg-slate-400 w-fit px-5 py-2 dark:text-white font-semibold">
            About
          </p>
          <p className="text-3xl font-extrabold dark:text-white">About Me</p>
        </div>
        <div className="flex flex-col gap-6">
          <img
            src="/images/wallpaper.jpg"
            alt="AboutMeImage"
            className="w-full max-w-4xl"
          />
          <div className="flex flex-col gap-1">
            <p className="text-xl font-bold">Shreedesh Niroula</p>
            <p className="text-sm text-gray-500">Game Developer</p>
          </div>
          <hr className="h-[2px] bg-gray-300" />
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In cumque
            impedit praesentium officia deleniti nam, dolorum enim alias
            voluptates consequuntur qui vel repudiandae odio natus recusandae
            incidunt, error quae dolor!
          </p>
          <hr className="h-[2px] bg-gray-300" />
        </div>

        <button className="px-10 py-4 text-white transition-all duration-200 ease-linear bg-black w-fit hover:tracking-wider">
          Download CV
        </button>
        <div className="flex flex-col gap-2">
          <p className="text-md font-bold">Skills</p>
          <div className="flex items-center gap-3 text-4xl">
            {skillIconsData.map((data, index) => {
              return <div key={index}>{data.icon}</div>;
            })}
          </div>
        </div>
        <div>
          <p className="text-md font-bold">Education</p>
        </div>
      </div>
    </div>
  );
}

export default About;
