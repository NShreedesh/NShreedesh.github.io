import { useContext } from "react";
import ScrollContext, { IScroll } from "../context/ScrollContext";

function Home() {
  const { scrollValue } = useContext<IScroll>(ScrollContext);

  return (
    <div
      className={"min-w-[100%] bg-slate-600 transition-all duration-500"}
      style={{
        translate: `${scrollValue}vw`,
      }}
    >
      <p>Home</p>
    </div>
  );
}

export default Home;
