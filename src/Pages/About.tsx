import { useContext } from "react";
import ScrollContext, { IScroll } from "../context/ScrollContext";

function About() {
  const { scrollValue } = useContext<IScroll>(ScrollContext);
  return (
    <div
      className="min-w-[100%] transition-all ease-in-out duration-500 flex justify-center px-20 "
      style={{
        translate: `${scrollValue}vw`,
      }}
    >
      <div className="flex flex-col max-w-screen-lg gap-5 md:flex-row pt-36">
        <img
          className="rounded-md pointer-events-none w-80 h-80"
          src="https://avatars.githubusercontent.com/u/65639214?v=4"
        />
        <div className="flex flex-col gap-5">
          <p className="text-2xl font-bold uppercase">About Me</p>
          <p className="text-sm">
            discovered my passion for game development during my time in
            college, where I majored in computer science. Since then, I've
            worked on a variety of projects across different platforms,
            including mobile, PC, and console games. I'm a creative problem
            solver and love the challenge of bringing new and exciting ideas to
            life. Skills and Expertise: Here are just a few of the skills and
            expertise I bring to my work as a game developer: Proficient in
            Unity and Unreal game engines Skilled in C#, C++, and other
            programming languages Strong understanding of game mechanics and
            systems Experience with mobile game development and optimization
            Familiarity with VR and AR technologies
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
