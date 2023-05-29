import { AiFillHtml5 } from "react-icons/ai";
import {
  SiCsharp,
  SiUnity,
  SiTypescript,
  SiFlutter,
  SiDotnet,
  SiExpress,
  SiXamarin,
  SiSass,
  SiMysql,
} from "react-icons/si";
import { DiCss3, DiReact, DiNodejs, DiMongodb } from "react-icons/di";

import IIcons from "../interfaces/IHomeIcons";

export const skillIconsData: IIcons[] = [
  {
    icon: <SiUnity className="text-black dark:text-white" />,
  },
  {
    icon: <SiCsharp className="text-green-700" />,
  },
  {
    icon: <SiDotnet className="text-green-700" />,
  },
  {
    icon: <AiFillHtml5 className="text-red-500" />,
  },
  {
    icon: <DiCss3 className="text-[#2499e8]" />,
  },
  {
    icon: <SiTypescript className="text-[#2499e8]" />,
  },
  {
    icon: <DiReact className="text-[#2499e8]" />,
  },
  {
    icon: <SiFlutter className="text-[#2499e8]" />,
  },
  {
    icon: <DiNodejs className="text-green-700 text-7xl" />,
  },
  {
    icon: <SiExpress className="text-[#2292dd]" />,
  },
  {
    icon: <SiXamarin className="text-[#2499e8]" />,
  },
  {
    icon: <SiSass className="text-pink-500" />,
  },
  {
    icon: <SiMysql className="text-[#4ba2dc] text-5xl" />,
  },
  {
    icon: <DiMongodb className="text-green-700" />,
  },
];
