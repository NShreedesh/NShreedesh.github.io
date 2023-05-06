import { useContext } from "react";
import ScrollContext, { IScroll } from "../../context/ScrollContext";
import { IGame } from "../../interfaces/IGame";

export default function Project({ title, description, videoUrl }: IGame) {
  const { scrollValue } = useContext<IScroll>(ScrollContext);
  return (
    <div
      className="min-w-[100%] transition-all duration-500 flex justify-center px-20 items-center"
      style={{
        translate: `${scrollValue}vw`,
      }}
    >
      <div className="flex gap-5">
        <video autoPlay muted loop className="rounded-lg">
          <source src={videoUrl} />
        </video>
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-bold">{title}</p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
