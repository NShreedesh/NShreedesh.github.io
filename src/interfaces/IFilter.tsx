import { ProjectFilter } from "../enums/ProjectFilter";

export default interface IFilter {
  filter: ProjectFilter;
  appliedFilter: ProjectFilter;
  title: string;
  updateFilter: (filter: ProjectFilter) => void;
}
