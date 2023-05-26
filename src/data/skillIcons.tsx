import { AiFillHtml5 } from "react-icons/ai";
import { SiCsharp, SiUnity, SiTypescript } from "react-icons/si";
import { DiCss3 } from "react-icons/di";

import IIcons from "../interfaces/IHomeIcons";

export const skillIconsData: IIcons[] = [
  {
    icon: <SiUnity style={{ color: "black" }} />,
  },
  {
    icon: <SiCsharp style={{ color: "green" }} />,
  },
  {
    icon: <AiFillHtml5 style={{ color: "red" }} />,
  },
  {
    icon: <DiCss3 style={{ color: "#007ACC" }} />,
  },
  {
    icon: <SiTypescript style={{ color: "#007ACC" }} />,
  },
];
