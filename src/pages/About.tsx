function About() {
  return (
    <div className="flex justify-center w-full h-screen text-center bg-light xl:text-start dark:bg-dark [transition:background-color_.3s,color_.3s]">
      <div className="flex flex-col max-w-xl gap-10 mt-16 xl:max-w-4xl animate-page">
        <div className="flex flex-col gap-2">
          <p className="bg-[#EEEEEE] w-fit p-2">About</p>
          <p className="text-3xl font-extrabold">About Me</p>
        </div>
        <div className="flex flex-col gap-6">
          <img
            src="/images/wallpaper.jpg"
            alt="AboutMeImage"
            className="w-full"
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
        <div>
          <p>Skills</p>
        </div>
        <div>
          <p>Education</p>
        </div>
      </div>
    </div>
  );
}

export default About;
