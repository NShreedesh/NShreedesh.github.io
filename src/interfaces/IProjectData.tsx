import { ProjectFilter } from "../enums/ProjectFilter";

export default interface IProjectData {
  title: string;
  youtubeId?: string;
  githubLink?: string;
  filter: ProjectFilter[];
  liveDemo?: string;
  image?: string;
}
