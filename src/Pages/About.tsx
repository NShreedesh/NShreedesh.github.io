import { useContext } from "react";
import ScrollContext, { IScroll } from "../context/ScrollContext";

function About() {
  const { scrollValue } = useContext<IScroll>(ScrollContext);
  return (
    <div
      className="min-w-[100%] transition-all duration-500 flex justify-center"
      style={{
        translate: `${scrollValue}vw`,
      }}
    >
      <div className="flex w-9/12 gap-5 pt-28">
        <img
          className="rounded-md pointer-events-none w-80 h-80"
          src="https://avatars.githubusercontent.com/u/65639214?v=4"
        />
        <div className="flex flex-col gap-5">
          <p className="text-2xl font-bold uppercase">About Me</p>
          <p className="text-sm">
            Hi there! My name is Shreedesh Niroula, and I'm a game developer
            with 3 years of experience. I'm passionate about creating fun and
            immersive gaming experiences that keep players engaged and coming
            back for more. I specialize in developing games using popular game
            engines such as Unity and I'm well-versed in programming languages
            such as C# and typeScript. I'm always exploring new technologies and
            techniques to improve my skills and take my game development
            abilities to the next level.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
