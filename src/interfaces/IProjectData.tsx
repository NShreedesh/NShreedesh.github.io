import { ProjectFilter } from "../enums/ProjectFilter";

export default interface IProjectData {
  title: string;
  youtubeLink?: string;
  githubLink?: string;
  filter: ProjectFilter;
}
