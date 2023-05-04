import { useContext } from "react";
import ScrollContext, { IScroll } from "../context/ScrollContext";

function About() {
  const { scrollValue } = useContext<IScroll>(ScrollContext);
  return (
    <div
      className={`min-w-[100%] bg-zinc-600 transition-all duration-500 translate-x-[-${scrollValue}vw]`}
    >
      About
    </div>
  );
}

export default About;
