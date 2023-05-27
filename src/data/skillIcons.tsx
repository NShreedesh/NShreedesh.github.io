import { AiFillHtml5 } from "react-icons/ai";
import { SiCsharp, SiUnity, SiTypescript } from "react-icons/si";
import { DiCss3 } from "react-icons/di";

import IIcons from "../interfaces/IHomeIcons";

export const skillIconsData: IIcons[] = [
  {
    icon: <SiUnity className="text-black dark:text-white" />,
  },
  {
    icon: <SiCsharp className="text-green-500" />,
  },
  {
    icon: <AiFillHtml5 className="text-red-500" />,
  },
  {
    icon: <DiCss3 className="text-[#2aaaff]" />,
  },
  {
    icon: <SiTypescript className="text-[#1fa5ff]" />,
  },
];
