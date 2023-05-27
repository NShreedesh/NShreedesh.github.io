import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdHomeRepairService } from "react-icons/md";
import { FaPortrait } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import INavbarData from "../interfaces/INavbarData";

export const navbarData: INavbarData[] = [
  {
    icon: <AiFillHome />,
    title: "Home",
    to: "/",
  },
  {
    icon: <BsFillPersonFill />,
    title: "About",
    to: "/about",
  },
  {
    icon: <MdHomeRepairService />,
    title: "CV",
    to: "/cv",
  },
  {
    icon: <FaPortrait />,
    title: "Projects",
    to: "/projects",
  },
  {
    icon: <IoMdMail />,
    title: "contact",
    to: "/contact",
  },
];
