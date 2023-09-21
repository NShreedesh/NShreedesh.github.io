import { ProjectFilter } from "../enums/ProjectFilter";
import IProjectData from "../interfaces/IProjectData";

export const projectsData: IProjectData[] = [
  {
    title: "Carrom",
    youtubeId: "W0YX9rL_5_Q",
    githubLink: "https://github.com/NShreedesh/Carrom",
    filter: [ProjectFilter.Game],
  },
  {
    title: "Battle Force (In Progress)",
    youtubeId: "MsSfkYzzFg8",
    filter: [ProjectFilter.Game],
  },
  {
    title: "Angry Bird",
    youtubeId: "Qqxb7jjwIRQ",
    githubLink: "https://github.com/NShreedesh/Angry-Bird",
    filter: [ProjectFilter.Game],
  },
  {
    title: "Duck Hunt",
    youtubeId: "41-j3HsJGVg",
    githubLink: "https://youtu.be/41-j3HsJGVg",
    filter: [ProjectFilter.Game],
  },
  {
    title: "Helix Jump",
    youtubeId: "GrI_KWFknnE",
    githubLink: "https://github.com/NShreedesh/Helix-Jump",
    filter: [ProjectFilter.Game],
  },
  {
    title: "29 Points Card",
    youtubeId: "8rgphD1xNtk",
    filter: [ProjectFilter.Game, ProjectFilter.Web],
    liveDemo: "https://diwashdahal.com.np/29points/",
  },
  {
    title: "Drag Me Down",
    liveDemo:
      "https://play.google.com/store/apps/details?id=com.BabbalGames.DragMeDown",
    filter: [ProjectFilter.Game],
    image: "/projectimage/DMD.png",
  },
  {
    title: "Fill The Line",
    youtubeId: "I_nQLd7q8XM",
    githubLink: "https://github.com/NShreedesh/Fill-The-Line",
    filter: [ProjectFilter.Game],
  },
  {
    title: "Flappy Bird",
    youtubeId: "Fjn5KztKNAU",
    githubLink: "https://github.com/NShreedesh/Flappy-Bird",
    filter: [ProjectFilter.Game],
  },
  {
    title: "Space Invaders",
    youtubeId: "4kz0kNJBA1k",
    githubLink: "https://github.com/NShreedesh/Space-Invaders",
    filter: [ProjectFilter.Game],
  },
  {
    title: "Escape From Darkness",
    youtubeId: "jz_IRfZE130",
    filter: [ProjectFilter.Game],
  },
  {
    title: "EJ Run",
    youtubeId: "vyIf6m1D7uA",
    filter: [ProjectFilter.Game],
  },
  {
    title: "Subhakaarya",
    liveDemo: "https://www.subhakaarya.com/",
    image: "/projectimage/subhakaarya.jpg",
    filter: [ProjectFilter.Web],
  },
];
