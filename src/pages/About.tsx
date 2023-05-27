import LineDetails from "../components/LineDetails";
import { educationData } from "../data/eductionData";
import { skillIconsData } from "../data/skillIcons";

function About() {
  return (
    <div className="flex w-full min-h-screen bg-light xl:text-start dark:bg-dark [transition:background-color_.3s,color_.3s] ">
      <div className="flex flex-col gap-10 px-5 pt-24 pb-10 xl:max-w-4xl animate-page xl:px-0 xl:ml-80">
        <div className="flex flex-col gap-2">
          <p className="bg-[#EEEEEE] dark:bg-[#242424] w-fit px-5 py-2 dark:text-white font-semibold">
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
            <p className="text-xl font-bold dark:text-white">
              Shreedesh Niroula
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-300 dark:opacity-80">
              Game Developer
            </p>
          </div>
          <hr className="h-[1px] bg-gray-400" />
          <p className="text-sm text-gray-500 dark:text-gray-300 dark:opacity-80">
            As a Unity game developer with a focus on C# programming, I bring a
            combination of technical skills and creativity to the table. I have
            a passion for creating engaging and immersive games that provide
            players with a unique experience. With my expertise in Unity and
            proficiency in C#, I have developed a variety of games across
            multiple platforms. My attention to detail and ability to work
            collaboratively with other developers and artists make me a valuable
            member of any game development team. I am constantly seeking new
            opportunities to challenge myself and bring new and innovative ideas
            to life in my games.
          </p>
          <hr className="h-[1px] bg-gray-400" />
        </div>

        <a
          className="px-5 py-3 font-medium text-white transition-all duration-200 ease-linear bg-black cursor-pointer w-fit hover:tracking-wider dark:bg-white dark:text-black"
          download
          href="/resume/MyResume.pdf"
        >
          Download CV
        </a>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-bold dark:text-white">Skills</p>
          <div className="flex items-center gap-3 text-4xl">
            {skillIconsData.map((data, index) => {
              return <div key={index}>{data.icon}</div>;
            })}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-bold dark:text-white">Education</p>
          <div className="relative flex flex-col gap-6">
            <div className="absolute w-[2px] h-full translate-x-[6.5px] bg-gray-500"></div>
            {educationData.map((data, index) => {
              return (
                <LineDetails
                  key={index}
                  timeline={data.timeline}
                  title={data.title}
                  subtitle={data.subtitle}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
